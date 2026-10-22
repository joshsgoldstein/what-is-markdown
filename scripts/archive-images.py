"""Preserve full-size PNG assets without recompression; run from the repo root."""
from pathlib import Path
from hashlib import sha256
from zipfile import ZipFile, ZIP_STORED
import json, struct
root = Path(__file__).resolve().parents[1]
output = root / 'public/concept-art/lostinai-image-archive.zip'
sources = sorted((root/'public').rglob('*.png')) + sorted((root/'design').rglob('*.png'))
seen = {}; records = []
with ZipFile(output, 'w', compression=ZIP_STORED) as archive:
    for path in sources:
        data = path.read_bytes()
        if data[:8] != b'\x89PNG\r\n\x1a\n':
            continue # Older JPEG screenshots have separate true-PNG exports.
        digest = sha256(data).hexdigest()
        if digest in seen:
            continue
        name = path.relative_to(root).as_posix()
        seen[digest] = name
        width, height = struct.unpack('>II', data[16:24])
        archive.writestr(name, data)
        records.append({'path': name, 'width': width, 'height': height, 'sha256': digest})
    for path in sorted((root/'image-prompts').glob('*.json')):
        archive.write(path, path.relative_to(root))
    manifest = json.dumps(records, indent=2) + '\n'
    archive.writestr('manifest.json', manifest)
    archive.writestr('README.txt', 'Lost In AI Land image archive\n\nOriginal PNG files are preserved byte for byte. Duplicate copies are included once.\npublic/concept-art: three generated concept mockups and six live design screenshots.\npublic/images: article artwork, diagrams, PNG exports of the CLI/Git SVG covers, and social image.\ndesign: earlier publication screenshots.\nimage-prompts: saved dinosaur prompts.\n\nArtwork inside a generated full-page mockup remains part of that original PNG; separate source layers were not generated.\nmanifest.json records dimensions and SHA-256 hashes.\n')
(root/'design/image-archive-manifest.json').write_text(manifest)
with ZipFile(output) as archive:
    assert archive.testzip() is None
print(f'Archived {len(records)} unique PNGs, {output.stat().st_size:,} bytes. ZIP integrity verified.')

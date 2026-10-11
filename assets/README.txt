Git LFS asset backup

This directory stores compressed public game assets for the captured Surfd
and Bunnyhop clients. The original code and assets retain their authors' rights;
see third-party/ and bunnyhop/SOURCES.txt.

From the repository root:
  git lfs install
  git lfs pull
  python3 asset-backup.py restore

Use --game bunnyhop or --game surfd to restore only one game. Restoration checks
both the downloaded archive hash and each unpacked file hash. Generated caches,
logs, partial downloads and runtime state remain ignored by Git.

To regenerate backups after intentionally updating complete verified caches:
  python3 asset-backup.py pack

Bunnyhop maps are independent .bsp.gz objects so changes to one map do not create
a new copy of every map. Other resources use a deterministic resources.tar.gz
per game. Unchanged archives are reused. manifest.json records the file inventory
and compressedBytes. Each archive must remain below the GitHub LFS file-size
limit for the repository owner's plan.

GitHub LFS quota and billing reference:
  https://docs.github.com/en/billing/concepts/product-billing/git-lfs

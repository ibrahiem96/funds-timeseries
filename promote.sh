
#!/bin/bash

git checkout v2/prod
git pull origin v2/dev
git add -A; git commit -m v2/prod; git push origin v2/prod
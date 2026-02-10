# Copyright / External Image Report

Scanned files: HTML and JS files in the workspace.

Summary
- I found external image URLs hotlinked from various domains. Hotlinking images you don't own may cause copyright issues and can harm AdSense approval.

Findings (external image URLs and where they're referenced)

- https://asset.jamieoliver.com/... (article.html)
  - Likely copyrighted (Jamie Oliver site). Replace with licensed or owned image.

- https://syncpr.co/wp-content/uploads/... (article.html)
  - Third-party site; check license or replace.

- https://tse2.mm.bing.net/... (article.html)
- https://tse1.mm.bing.net/... (article.html)
- https://tse4.mm.bing.net/... (article.html)
  - Bing image service (hotlinks). These are not guaranteed free to use. Replace or host your own licensed copy.

- https://i.ytimg.com/vi/.../maxresdefault.jpg (article.html)
  - YouTube thumbnails; may be owned by video owners. Replace with your own images or obtain permission.

- https://images.unsplash.com/... (multiple entries in article.html)
  - Unsplash images are generally free to use under Unsplash license, but best practice is to download and host locally and optionally attribute.

- https://pikaso.cdnpk.net/... (food.html/article.html)
  - Third-party CDN. Verify license or replace.

- https://i.pinimg.com/... (food.html/article.html)
  - Pinterest images may be copyrighted; avoid hotlinking.

- https://wallpapercave.com/... (gaming.html)
  - Likely copyrighted; replace.

- https://images.unsplash.com/photo-... (many files)
  - Unsplash — consider downloading and hosting locally.

- Other external domains seen: images from `media-gadventures`, `tse*`, `th.bing.com`, `i.ytimg.com`, `pikaso.cdnpk.net`, `i.pinimg.com`, `wallpapercave.com`, `syncpr.co`, `asset.jamieoliver.com`.

Recommendations / Next steps
- Replace hotlinked images from unknown/third-party sites (Jamie Oliver, Bing, Pinterest, YouTube thumbnails, WallpaperCave, etc.) with:
  - Images you own, OR
  - Images from a permissive license (Unsplash, Pexels) that you've downloaded and host locally, OR
  - Properly licensed stock images (purchase license and host locally).

- For Unsplash images: download and host locally; attribution is optional but recommended.

- Avoid using YouTube thumbnails or images scraped from other publishers without permission.

- After replacing images, re-run a scan to confirm all remaining external image references are acceptable.

If you want, I can:
- Automatically replace external image URLs with a local placeholder image (I can add a `placeholder.jpg` and update references), OR
- Download and save Unsplash images locally and update references, OR
- Generate a staged patch that replaces highest-risk URLs (Jamie Oliver, Pinterest, WallpaperCave) with placeholders.

Which action should I take next?
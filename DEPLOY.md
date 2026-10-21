# Deploy SB HUB with Ultraviolet Proxy

## Quick Setup (5 minutes)

### 1. Prepare your files

```
sbhub-uv/
├── package.json          (provided)
├── server.js             (provided)
├── .gitignore            (provided)
├── public/
│   ├── index.html        (copy sbhub.html here)
│   ├── sw.js             (provided)
│   └── uv/
│       ├── uv.config.js  (provided)
│       └── (all other UV files from node_modules)
```

### 2. Copy Ultraviolet files to public/uv/

After installing dependencies:

```powershell
# Windows PowerShell
Copy-Item -Recurse node_modules/@titaniumnetwork-dev/ultraviolet/dist/* public/uv/ -Force
```

**Or on Mac/Linux:**

```bash
cp -r node_modules/@titaniumnetwork-dev/ultraviolet/dist/* public/uv/
```

### 3. Copy your SB HUB file

Copy `sbhub.html` to `public/index.html`

### 4. Create GitHub repo and push

```powershell
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR-USERNAME/sbhub-uv.git
git branch -M main
git push -u origin main
```

### 5. Deploy to Render

1. Go to https://render.com
2. Sign up with GitHub
3. Click **New → Web Service**
4. Select your `sbhub-uv` repo
5. Set:
   - **Name**: `sbhub-uv`
   - **Environment**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
6. Click **Deploy**

Your site will be live in ~5 minutes at `https://sbhub-uv.onrender.com`

---

## What's included

- ✅ Express server with Ultraviolet routing
- ✅ Wisp WebSocket proxy endpoint
- ✅ Service worker for interception
- ✅ Ultraviolet codec (XOR encoding)
- ✅ CORS and HTTPS compatible

## Notes

- Do NOT open `index.html` directly (`file://`). Service workers only work on `http://` or `https://`.
- If the proxy doesn't work, check that the `public/uv/` folder has all Ultraviolet files.
- Free Render deployments sleep after 15 minutes of inactivity—they wake automatically when accessed.

---

Need help? Check the Render dashboard logs for errors.

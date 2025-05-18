<p align="center">
  <img src="public/assets/icons/Datanest2.svg" alt="Datanest Logo" width="180" />
</p>

<h1 align="center">Datanest</h1>
<p align="center">
  <b>The only storage solution you need.</b><br>
  Effortlessly upload, organize, and share your files in a beautiful, modern UI.
</p>

<p align="center">
  <img src="public/assets/images/files-2.png" alt="Datanest UI Preview" width="500" />
</p>

---

## 🚀 Features

- <img src="public/assets/icons/upload.svg" width="18" /> **Drag & Drop File Uploads**
- <img src="public/assets/icons/documents.svg" width="18" /> **Document, Image, Video & Audio Support**
- <img src="public/assets/icons/share.svg" width="18" /> **Easy File Sharing & Permissions**
- <img src="public/assets/icons/dashboard.svg" width="18" /> **Dashboard with Usage Analytics**
- <img src="public/assets/icons/edit.svg" width="18" /> **Rename, Delete, and Manage Files**
- <img src="public/assets/icons/logout-indigo.svg" width="18" /> **Secure Auth & OTP Verification**
- <img src="public/assets/icons/dots.svg" width="18" /> **Modern, Responsive UI (Next.js + Tailwind CSS)**

---

## 🛠️ Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/datanest.git
   cd datanest
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Configure environment variables**

   Create a `.env.local` file and add your Appwrite credentials:

   ```env
   NEXT_PUBLIC_APPWRITE_ENDPOINT=your-appwrite-endpoint
   NEXT_PUBLIC_APPWRITE_PROJECT=your-project-id
   NEXT_PUBLIC_APPWRITE_DATABASEID=your-database-id
   NEXT_PUBLIC_APPWRITE_USERS_COLLECTION=your-users-collection-id
   NEXT_PUBLIC_APPWRITE_FILES_COLLECTION=your-files-collection-id
   NEXT_PUBLIC_APPWRITE_BUCKET=your-bucket-id
   NEXT_APPWRITE_KEY=your-appwrite-api-key
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open [http://localhost:3000](http://localhost:3000) to view the app.**

---

## 📁 Folder Structure

```
app/                # Next.js app directory (routes, layouts, pages)
components/         # Reusable UI components
constants/          # App-wide constants
hooks/              # Custom React hooks
lib/                # Appwrite and utility functions
public/             # Static assets (icons, images)
types/              # TypeScript types and interfaces
```

---

## 🌐 Deploy on Vercel

Deploy your project instantly with [Vercel](https://vercel.com/new?utm_source=github&utm_medium=readme):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new?utm_source=github&utm_medium=readme)

---

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Appwrite Documentation](https://appwrite.io/docs)

---

## 🖼️ UI Preview

<p align="center">
  <img src="public/assets/images/files.png" alt="Datanest UI Screenshot" width="400" />
</p>

---

## 📄 License

This project is [MIT licensed](LICENSE).

---

<p align="center">
  Made with <img src="public/assets/icons/heart.svg" width="16" /> by the Datanest team.
</p>

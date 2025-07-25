# 🖼️ LiLAC Image Management Guide

This guide explains how to easily change any image on your website by simply replacing files in the organized image folders.

## 📁 Folder Structure

Your images are organized in `public/images/` with these subfolders:

```
public/images/
├── artists/          # Artist portrait photos
├── artwork/          # Gallery artwork images
├── studio/           # Studio space photos
├── videos/           # Video thumbnails
├── workshops/        # Workshop photos
└── placeholder.jpg   # Fallback image
```

## 🎯 How to Change Images

### Method 1: Replace Files (Easiest)
1. **Keep the same filename** - Simply replace the existing image file
2. **Use supported formats**: .jpg, .jpeg, .png, .webp
3. **Recommended sizes**:
   - Artist portraits: 300x300px (square)
   - Artwork: 400x500px (4:5 ratio)
   - Studio photos: 500x400px (5:4 ratio)
   - Video thumbnails: 500x300px (5:3 ratio)
   - Workshop photos: 400x300px (4:3 ratio)

### Method 2: Change Filenames
1. **Add your new image** to the appropriate folder
2. **Update the filename** in `src/utils/imageConfig.ts`
3. **Save the file** - changes appear automatically

## 📋 Current Image Files

### Artist Portraits (`/images/artists/`)
- `alex-plummer.jpg` - Alex Plummer portrait
- `beata-palach.jpg` - Beata Pałach portrait  
- `claire-lloyd-bown.jpg` - Claire Lloyd-Bown portrait
- `jung-ah-kim.jpg` - Jung-Ah Kim portrait
- `mallika-gardiner.jpg` - Mallika Gardiner portrait

### Studio Spaces (`/images/studio/`)
- `main-studio-space.jpg` - Main creative sanctuary
- `community-workshop.jpg` - Workshop area in action
- `artist-collaboration.jpg` - Artists collaborating

### Artwork Gallery (`/images/artwork/`)
- `doodle-body-series-3.jpg` - Alex's drawing series
- `algarve-memories.jpg` - Jung-Ah's oil painting
- `earth-whispers.jpg` - Beata's natural pigment work
- `digital-heritage.jpg` - Claire's mixed media
- `motherhood-bloom.jpg` - Mallika's feminine themes
- `sustainable-gestures.jpg` - Beata's eco-art
- `visual-stories.jpg` - Alex's graphic recording
- `cultural-bridges.jpg` - Jung-Ah's cultural diary
- `textile-innovation.jpg` - Claire's digital textile
- `eastern-light.jpg` - Mallika's botanical study

### Workshop Photos (`/images/workshops/`)
- `still-life-week-1.jpg` - Week 1 observation exercises
- `still-life-week-2.jpg` - Week 2 color exploration
- `still-life-week-3.jpg` - Week 3 final compositions

### Video Thumbnails (`/images/videos/`)
- `studio-tour-thumbnail.jpg` - Studio tour preview
- `natural-pigment-process-thumbnail.jpg` - Beata's process
- `workshop-highlights-thumbnail.jpg` - Community workshops
- `graphic-recording-live-thumbnail.jpg` - Alex's live work
- `collaborative-art-thumbnail.jpg` - Group creation

## 🔧 Advanced: Editing the Configuration

To add new images or change filenames, edit `src/utils/imageConfig.ts`:

```typescript
export const imageConfig = {
  artists: {
    alexPlummer: '/images/artists/alex-plummer.jpg',
    // Add new artist: newArtist: '/images/artists/new-artist.jpg',
  },
  artwork: {
    doodleBodySeries: '/images/artwork/doodle-body-series-3.jpg',
    // Add new artwork: newPiece: '/images/artwork/new-piece.jpg',
  },
  // ... other categories
};
```

## 📐 Image Optimization Tips

### File Sizes
- **Keep images under 1MB** for fast loading
- **Use JPG for photos** (better compression)
- **Use PNG for graphics** with transparency
- **Consider WebP format** for modern browsers

### Dimensions
- **Don't go smaller** than recommended sizes
- **Higher resolution is okay** but increases file size
- **Maintain aspect ratios** for best display

### Tools for Resizing
- **Online**: TinyPNG, Squoosh.app, Canva
- **Desktop**: GIMP (free), Photoshop, Preview (Mac)
- **Bulk editing**: ImageOptim (Mac), RIOT (Windows)

## 🚨 Troubleshooting

### Image Not Showing?
1. **Check the filename** matches exactly (case-sensitive)
2. **Verify the file** is in the correct folder
3. **Refresh your browser** (Ctrl+F5 or Cmd+Shift+R)
4. **Check file format** (.jpg, .png, .webp supported)

### Image Looks Stretched?
1. **Check aspect ratio** matches recommendations above
2. **Crop the image** to fit the suggested dimensions
3. **Use object-fit: cover** (already implemented in CSS)

### Site Loading Slowly?
1. **Compress large images** using tools above
2. **Check total file sizes** in each folder
3. **Consider converting** to WebP format

## 💡 Best Practices

### Naming Convention
- Use **lowercase** letters
- Use **hyphens** instead of spaces
- Be **descriptive**: `artist-name.jpg` not `IMG_001.jpg`
- Include **dimensions** if helpful: `logo-300x100.png`

### Backup Strategy
- **Keep originals** in a separate folder outside the project
- **Document changes** in a simple text file
- **Test changes** before important events or launches

### Accessibility
- **Use descriptive alt text** (already implemented in components)
- **Ensure good contrast** for any text on images
- **Provide captions** for important visual information

## 🎨 Content Strategy

### Artist Portraits
- **Professional quality** photos work best
- **Consistent lighting** across all portraits
- **Similar backgrounds** create visual cohesion
- **Update regularly** to reflect current work

### Artwork Photography
- **Even lighting** without harsh shadows
- **Neutral backgrounds** (white/gray walls)
- **Straight angles** - avoid tilted perspectives
- **Show scale** when relevant

### Studio Spaces
- **Clean, organized** spaces photograph better
- **Action shots** show the space in use
- **Multiple angles** provide context
- **Natural lighting** when possible

---

**Need help?** The image system is designed to be simple and forgiving. When in doubt, just replace the file with the same name and format! 
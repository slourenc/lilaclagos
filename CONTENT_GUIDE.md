# 🌸 LiLAC Website Content Management Guide

## 📝 Easy Content Updates

All website content can be easily updated by editing the `src/data/content.ts` file. No coding knowledge required!

### 🎨 Adding New Artwork

To add new artwork to the gallery:

1. Open `src/data/content.ts`
2. Find the `artworkGallery` array
3. Add a new object with these fields:

```typescript
{
  id: 'unique-id',
  title: 'Your Artwork Title',
  artist: 'Artist Name',
  medium: 'Oil on Canvas', // or any medium
  year: '2024',
  description: 'Description of the artwork...',
  imageUrl: 'https://your-image-url.com/image.jpg',
  category: 'painting', // painting, drawing, mixed-media, digital, sculpture
  featured: true // Set to true for homepage display
}
```

### 🎬 Adding New Videos

To add behind-the-scenes or workshop videos:

1. Find the `videoGallery` array in `src/data/content.ts`
2. Add a new video entry:

```typescript
{
  id: 'unique-id',
  title: 'Video Title',
  description: 'Brief description...',
  thumbnailUrl: 'https://thumbnail-url.com/thumb.jpg',
  videoUrl: 'https://www.youtube.com/embed/VIDEO_ID',
  type: 'workshop' // workshop, process, exhibition, interview
}
```

### 🎭 Adding New Workshops

To add or update workshop information:

1. Find the `workshopData` array in `src/data/content.ts`
2. Add or modify workshop entries:

```typescript
{
  id: 'unique-id',
  title: 'Workshop Name',
  description: 'What participants will learn...',
  duration: '2.5 hours',
  price: '€25/session',
  schedule: 'Thursdays 5:00-7:30 PM',
  imageUrl: 'https://workshop-image-url.com/image.jpg',
  highlights: ['Skill 1', 'Skill 2', 'Skill 3'],
  difficulty: 'beginner', // beginner, intermediate, advanced, all-levels
  materials: 'All materials provided'
}
```

### ✏️ Updating Text Content

To update general website text:

1. Find the `siteContent` object in `src/data/content.ts`
2. Update any of these sections:
   - `hero.tagline` - Main homepage tagline
   - `hero.subtitle` - Homepage description
   - `hero.callToAction` - Main button text
   - `about.mission` - About page mission statement
   - `about.vision` - About page vision statement
   - `contact.email` - Contact email
   - `contact.instagram` - Instagram handle
   - `contact.location` - Physical location

## 🖼️ Image Guidelines

### Best Practices for Images:
- **Artwork Images**: Use high-quality photos (at least 800x600 pixels)
- **Workshop Images**: Action shots of workshops or studio spaces
- **Video Thumbnails**: Clear, engaging preview images
- **File Formats**: JPG or PNG recommended
- **Loading Speed**: Compress images to keep file sizes reasonable

### Where to Host Images:
- **Free Options**: Upload to Instagram and copy image URLs
- **Professional Options**: Use services like Cloudinary, AWS S3, or Google Drive
- **Temporary Testing**: Use https://picsum.photos for placeholder images

## 🚀 Publishing Changes

After updating content:

1. Save the `content.ts` file
2. If running locally: Changes appear automatically
3. If hosted online: Commit changes to your repository

## 💡 Tips for Success

### Content Strategy:
- **Regular Updates**: Add new artwork monthly
- **Workshop Promotion**: Update workshop schedules seasonally
- **Behind-the-Scenes**: Share process videos to engage visitors
- **Featured Rotation**: Change featured artwork quarterly

### SEO & Engagement:
- Use descriptive titles and descriptions
- Include artist names and techniques
- Add workshop keywords for discoverability
- Update contact information if it changes

### Visual Consistency:
- Maintain similar photo styles and lighting
- Use consistent color schemes in new artwork photos
- Keep video thumbnail styles similar
- Ensure all images load properly

## 🆘 Need Help?

### Common Issues:
- **Images not loading**: Check image URLs are publicly accessible
- **Layout looks broken**: Ensure all required fields are filled
- **Videos not playing**: Verify YouTube embed URLs are correct

### Technical Support:
- Check the browser console for error messages
- Ensure all quote marks and commas are properly placed
- Test on different devices and browsers

---

**Remember**: The beauty of this system is that you can update everything from one file! Keep this guide handy and your website will always be fresh and engaging. 🎨✨ 
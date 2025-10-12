# User notes

I can go into the globals.css file and add my own css styles.

# Image Styling in Astro

This document contains information and examples for working with images in Astro components.

## Image Component Usage

### Basic Image with Styling

```astro
<div class="max-w-2xl mx-auto my-4">
    <Image
        src={imageVariable}
        alt="Descriptive alt text"
        width={800}
        height={600}
        {...IMAGE_PROPS}
    />
</div>
```

### Image Properties (IMAGE_PROPS)

The `IMAGE_PROPS` object contains default styling for images:

```javascript
const IMAGE_PROPS = {
  loading: 'lazy',
  decoding: 'async',
  class: 'rounded-lg',
  formats: ['avif', 'webp', 'jpg'],
  quality: 100,
  rotate: 0
};
```

### Available Container Widths

Use these Tailwind classes to control image container widths:

- `max-w-xs` (20rem/320px)
- `max-w-sm` (24rem/384px)
- `max-w-md` (28rem/448px)
- `max-w-lg` (32rem/512px)
- `max-w-xl` (36rem/576px)
- `max-w-2xl` (42rem/672px) - Recommended for most blog images
- `max-w-3xl` (48rem/768px)
- `max-w-4xl` (56rem/896px)
- `max-w-5xl` (64rem/1024px)
- `max-w-6xl` (72rem/1152px)
- `max-w-7xl` (80rem/1280px)

### Multiple Images in a Grid

For a responsive grid of images:

```astro
<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div class="max-w-full">
        <Image
            src={image1}
            alt="First image"
            width={600}
            height={400}
            {...IMAGE_PROPS}
        />
    </div>
    <div class="max-w-full">
        <Image
            src={image2}
            alt="Second image"
            width={600}
            height={400}
            {...IMAGE_PROPS}
        />
    </div>
</div>
```

### Full-Width Image

```astro
<div class="w-full my-4">
    <Image
        src={fullWidthImage}
        alt="Full width image"
        width={1200}
        height={800}
        class="w-full h-auto rounded-lg"
        {...IMAGE_PROPS}
    />
</div>
```

### Centered Image with Caption

```astro
<figure class="max-w-2xl mx-auto my-8">
    <Image
        src={imageWithCaption}
        alt="Image with caption"
        width={800}
        height={600}
        {...IMAGE_PROPS}
    />
    <figcaption class="text-center text-sm text-gray-500 mt-2">
        This is a caption for the image above.
    </figcaption>
</figure>
```

## Best Practices

1. Always provide meaningful `alt` text for accessibility
2. Set appropriate `width` and `height` to prevent layout shifts
3. Use the `loading="lazy"` attribute for below-the-fold images
4. Consider using `srcset` for responsive images (handled automatically by Astro's Image component)
5. Keep image file sizes optimized for web

## Common Issues

### Image Not Displaying

- Check if the image path is correct
- Verify the image is in the correct directory
- Ensure the image import statement is correct

### Blurry Images

- Make sure the `width` and `height` match the image's aspect ratio
- Use high enough resolution images for the display size

### TypeScript Errors

- If you see TypeScript errors with the Image component, ensure you're using the correct import:
  ```astro
  import { Image } from 'astro:assets';
  ```
- Check that your Astro version is up to date

# Radiant Collective Capital - Website

Exact replication of aegisvopak.com header and hero design.

## Files

- **index.html** - Homepage with hero section
- **about.html** - About Us page
- **membership.html** - Membership page
- **contact.html** - Contact page
- **styles.css** - Global styles (header + hero + responsive)
- **header.html** - Reusable header component (reference)

## Design Details Replicated

### Header
- White background with subtle shadow (`0 2px 8px rgba(0, 0, 0, 0.06)`)
- Sticky positioning
- Logo: "RADIANT BLACK" (bold, 1.5rem)
- Navigation: About Us, Membership, Contact
- Log In button: Transparent with border, shadow on hover

### Hero
- Two-column grid layout
- Large headline (3.5rem, light font weight)
- Descriptive text (1.1rem, light weight)
- Green "Learn more" button on right side
- Button shadow: `0 4px 12px rgba(45, 122, 79, 0.25)`
- Arrow icon after button text

### Responsive
- Desktop: 1400px max width
- Tablet: Single column layout, smaller text
- Mobile: Hide nav links, stack content

## Usage

1. Copy header HTML block to maintain consistency across all pages
2. Update page-specific content in the hero or main sections
3. All styling is in `styles.css` - modify colors/sizes there

## Next Steps

- Add Radiant Black logo image
- Customize green button color if needed
- Add page-specific content

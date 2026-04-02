#!/bin/bash

# Script to add Open Graph and Twitter meta tags to all HTML pages

OG_TAGS='
    <!-- Open Graph Meta Tags -->
    <meta property="og:site_name" content="Radiant Collective Capital">
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://radiantcollective.capital">
    <meta property="og:title" content="The Future Will Be Funded By African Women">
    <meta property="og:description" content="Join the financial learning and co-investment community for African women building wealth, legacy, and prosperity.">
    <meta property="og:image" content="https://radiantcollective.capital/assets/images/og-image.jpg">
    <meta property="og:image:width" content="1200">
    <meta property="og:image:height" content="630">
    
    <!-- Twitter Card Meta Tags -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="The Future Will Be Funded By African Women">
    <meta name="twitter:description" content="Join the financial learning and co-investment community for African women building wealth, legacy, and prosperity.">
    <meta name="twitter:image" content="https://radiantcollective.capital/assets/images/og-image.jpg">
    
    <!-- Additional Meta Tags -->
    <meta name="author" content="Radiant Collective Capital">
    <meta name="robots" content="index, follow">
    <link rel="canonical" content="https://radiantcollective.capital">'

echo "Social meta tags template created in add-og-tags.sh"
echo "Manually add these tags to all HTML pages before </head>"

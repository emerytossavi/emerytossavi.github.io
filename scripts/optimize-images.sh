#!/bin/bash

################################################################################
# Image Optimization Script for Portfolio SEO
# Converts source images to modern formats (WebP, AVIF, SVG)
# Based on: IMAGE_OPTIMIZATION.md
################################################################################

set -e  # Exit on error

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Directories
LOGO_DIR="public/pics/logo"
PROFIL_DIR="public/pics/profil"
OG_DIR="public/pics/og"

# Source files
LOGO_SOURCE="$LOGO_DIR/et-logo.png"
PROFIL_SOURCE="$PROFIL_DIR/emery-tossavi.jpg"

################################################################################
# Helper Functions
################################################################################

print_header() {
    echo -e "\n${BLUE}======================================${NC}"
    echo -e "${BLUE}$1${NC}"
    echo -e "${BLUE}======================================${NC}\n"
}

print_success() {
    echo -e "${GREEN}✓${NC} $1"
}

print_error() {
    echo -e "${RED}✗${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}⚠${NC} $1"
}

print_info() {
    echo -e "${BLUE}ℹ${NC} $1"
}

check_command() {
    if ! command -v "$1" &> /dev/null; then
        print_error "$1 is not installed"
        return 1
    fi
    return 0
}

check_file() {
    if [ ! -f "$1" ]; then
        print_error "Source file not found: $1"
        return 1
    fi
    return 0
}

get_file_size() {
    if [ -f "$1" ]; then
        du -h "$1" | cut -f1
    else
        echo "N/A"
    fi
}

################################################################################
# Prerequisites Check
################################################################################

check_prerequisites() {
    print_header "Checking Prerequisites"
    
    local all_good=true
    
    # Check ImageMagick
    if check_command "convert"; then
        print_success "ImageMagick installed"
    else
        print_error "ImageMagick not installed. Run: sudo apt-get install imagemagick"
        all_good=false
    fi
    
    # Check cwebp
    if check_command "cwebp"; then
        print_success "WebP tools installed"
    else
        print_error "WebP tools not installed. Run: sudo apt-get install webp"
        all_good=false
    fi
    
    # Check avifenc (optional but recommended)
    if check_command "avifenc"; then
        print_success "AVIF tools installed"
    else
        print_warning "AVIF tools not installed (optional). Run: sudo apt-get install libavif-bin"
    fi
    
    # Check source files
    if check_file "$LOGO_SOURCE"; then
        print_success "Logo source found: $LOGO_SOURCE"
    else
        all_good=false
    fi
    
    if check_file "$PROFIL_SOURCE"; then
        print_success "Profile source found: $PROFIL_SOURCE"
    else
        all_good=false
    fi
    
    if [ "$all_good" = false ]; then
        print_error "Please install missing dependencies and ensure source files exist"
        exit 1
    fi
    
    echo ""
}

################################################################################
# Logo Conversions
################################################################################

optimize_logo() {
    print_header "Optimizing Logo Images"
    
    cd "$LOGO_DIR" || exit 1
    
    # 1. WebP - Main logo
    print_info "Converting logo to WebP (500x500)..."
    if cwebp -q 90 -resize 500 500 et-logo.png -o et-logo.webp 2>/dev/null; then
        print_success "Created et-logo.webp ($(get_file_size et-logo.webp))"
    else
        print_error "Failed to create et-logo.webp"
    fi
    
    # 2. 192x192 for Android/PWA
    print_info "Creating 192x192 version..."
    if convert et-logo.png -resize 192x192 et-logo-192.png 2>/dev/null; then
        print_success "Created et-logo-192.png ($(get_file_size et-logo-192.png))"
        
        if cwebp -q 90 et-logo-192.png -o et-logo-192.webp 2>/dev/null; then
            print_success "Created et-logo-192.webp ($(get_file_size et-logo-192.webp))"
        fi
    else
        print_error "Failed to create 192x192 version"
    fi
    
    # 3. 512x512 for PWA
    print_info "Creating 512x512 version..."
    if convert et-logo.png -resize 512x512 et-logo-512.png 2>/dev/null; then
        print_success "Created et-logo-512.png ($(get_file_size et-logo-512.png))"
        
        if cwebp -q 90 et-logo-512.png -o et-logo-512.webp 2>/dev/null; then
            print_success "Created et-logo-512.webp ($(get_file_size et-logo-512.webp))"
        fi
    else
        print_error "Failed to create 512x512 version"
    fi
    
    cd - > /dev/null
    echo ""
}

################################################################################
# Profile Image Conversions
################################################################################

optimize_profile() {
    print_header "Optimizing Profile Image"
    
    cd "$PROFIL_DIR" || exit 1
    
    # 1. WebP
    print_info "Converting profile to WebP..."
    if cwebp -q 85 emery-tossavi.jpg -o emery-tossavi.webp 2>/dev/null; then
        print_success "Created emery-tossavi.webp ($(get_file_size emery-tossavi.webp))"
    else
        print_error "Failed to create emery-tossavi.webp"
    fi
    
    # 2. AVIF (if available)
    if check_command "avifenc"; then
        print_info "Converting profile to AVIF..."
        if avifenc -s 6 -j 8 emery-tossavi.jpg emery-tossavi.avif 2>/dev/null; then
            print_success "Created emery-tossavi.avif ($(get_file_size emery-tossavi.avif))"
        else
            print_error "Failed to create emery-tossavi.avif"
        fi
    else
        print_warning "Skipping AVIF (avifenc not installed)"
    fi
    
    cd - > /dev/null
    echo ""
}

################################################################################
# Open Graph Image (1200x630)
################################################################################

create_og_image() {
    print_header "Creating Open Graph Image"
    
    # Create OG directory if it doesn't exist
    mkdir -p "$OG_DIR"
    
    cd "$PROFIL_DIR" || exit 1
    
    # 1. Crop to 1200x630 (OG recommended ratio 1.91:1)
    print_info "Creating 1200x630 OG image..."
    if convert emery-tossavi.jpg \
        -resize 1200x630^ \
        -gravity center \
        -extent 1200x630 \
        "../og/og-image.jpg" 2>/dev/null; then
        print_success "Created og-image.jpg ($(get_file_size ../og/og-image.jpg))"
    else
        print_error "Failed to create og-image.jpg"
        cd - > /dev/null
        return 1
    fi
    
    cd "../og" || exit 1
    
    # 2. WebP version
    print_info "Converting OG image to WebP..."
    if cwebp -q 90 og-image.jpg -o og-image.webp 2>/dev/null; then
        print_success "Created og-image.webp ($(get_file_size og-image.webp))"
    else
        print_error "Failed to create og-image.webp"
    fi
    
    cd - > /dev/null
    echo ""
}

################################################################################
# Summary Report
################################################################################

print_summary() {
    print_header "Optimization Summary"
    
    echo -e "${BLUE}Logo Images:${NC}"
    echo "  • et-logo.webp:         $(get_file_size $LOGO_DIR/et-logo.webp)"
    echo "  • et-logo-192.png:      $(get_file_size $LOGO_DIR/et-logo-192.png)"
    echo "  • et-logo-192.webp:     $(get_file_size $LOGO_DIR/et-logo-192.webp)"
    echo "  • et-logo-512.png:      $(get_file_size $LOGO_DIR/et-logo-512.png)"
    echo "  • et-logo-512.webp:     $(get_file_size $LOGO_DIR/et-logo-512.webp)"
    echo ""
    
    echo -e "${BLUE}Profile Images:${NC}"
    echo "  • emery-tossavi.webp:   $(get_file_size $PROFIL_DIR/emery-tossavi.webp)"
    echo "  • emery-tossavi.avif:   $(get_file_size $PROFIL_DIR/emery-tossavi.avif)"
    echo ""
    
    echo -e "${BLUE}Open Graph Images:${NC}"
    echo "  • og-image.jpg:         $(get_file_size $OG_DIR/og-image.jpg)"
    echo "  • og-image.webp:        $(get_file_size $OG_DIR/og-image.webp)"
    echo ""
    
    print_success "All images optimized successfully!"
    print_info "Next steps:"
    echo "  1. Run: npm run build"
    echo "  2. Test favicon and OG images"
    echo "  3. Validate with Lighthouse"
    echo ""
}

################################################################################
# Main Execution
################################################################################

main() {
    echo -e "${GREEN}"
    echo "╔════════════════════════════════════════════════════════════╗"
    echo "║         Portfolio Image Optimization Script                ║"
    echo "║         SEO & Performance Best Practices                   ║"
    echo "╚════════════════════════════════════════════════════════════╝"
    echo -e "${NC}"
    
    check_prerequisites
    optimize_logo
    optimize_profile
    create_og_image
    print_summary
}

# Run main function
main

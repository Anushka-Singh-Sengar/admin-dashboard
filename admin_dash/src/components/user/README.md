# User Components

This folder contains React components for managing users in the admin dashboard.

## Components

### UserGrid.js
- **Purpose**: Displays users in a card-based grid layout
- **Features**: 
  - Responsive grid layout (col-lg-6 col-xl-4)
  - User profile images with hover effects
  - Modal popup for detailed user information
  - Uses all available user images (u-xl-1 to u-xl-12)

### UserList.js
- **Purpose**: Displays users in a table format with search and filtering
- **Features**:
  - Search functionality (name, email, phone)
  - Add user modal
  - Edit/Delete actions
  - Status badges
  - Responsive table design

### UserProfile.js
- **Purpose**: Detailed individual user profile page
- **Features**:
  - Profile header with cover image and avatar
  - Tabbed interface (Profile, Orders, Activity)
  - Editable profile information
  - Order history
  - Recent activity timeline

### userData.js
- **Purpose**: Centralized user data and helper functions
- **Features**:
  - Complete user dataset with 12 users
  - Helper functions for searching and finding users
  - Consistent data structure across components

## Usage

```javascript
import { UserGrid, UserList, UserProfile } from './components/user';

// Use in your routes or components
<UserGrid />
<UserList />
<UserProfile />
```

## Data Structure

Each user object contains:
```javascript
{
  id: number,
  name: string,
  email: string,
  phone: string,
  img: string,        // Large profile image
  imgThumb: string,   // Thumbnail image
  totalBuy: string,   // Total purchase amount
  status: string,     // 'ACTIVE' or 'INACTIVE'
  joinDate: string,   // Registration date
  location: string,   // User location
  bio: string,        // User bio
  orders: string      // Number of orders
}
```

## Available Images

The components use the following user profile images:
- **Large images**: `u-xl-1.jpg` to `u-xl-12.jpg` (for grid and profile views)
- **Thumbnail images**: `u1.jpg` to `u9.jpg` (for list view)
- **Default image**: `user.png`

## Styling

All components use the existing Ekka CSS classes:
- `.ec-user-card` - User card styling
- `.vendor-thumb` - Thumbnail image styling
- `.ec-vendor-list` - List container styling

## Integration

These components are designed to work with the existing admin dashboard structure and can be easily integrated into the sidebar navigation system. 
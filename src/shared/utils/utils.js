
export const queryParamsBuilder = (params) => {
    return Object.fromEntries(
    Object.entries(params)
      .filter(([_, value]) => value !== undefined && value !== null && value !== '')
  )
}

// Helper function để kiểm tra loại file
export const getFileType = (fileName) => {
  if (!fileName) return 'image';
  
  const extension = fileName.split('.').pop()?.toLowerCase();
  const videoExtensions = ['mp4', 'avi', 'mov', 'wmv', 'flv', 'webm', 'mkv'];
  const imageExtensions = ['jpg', 'jpeg', 'png', 'gif', 'bmp', 'webp', 'svg'];
  
  if (videoExtensions.includes(extension)) {
    return 'video';
  } else if (imageExtensions.includes(extension)) {
    return 'image';
  }
  
  return 'image'; // Default fallback
};

export const formatPrice = (price) => {
  if (!price && price !== 0) return '0';
  return price.toLocaleString('vi-VN');
};
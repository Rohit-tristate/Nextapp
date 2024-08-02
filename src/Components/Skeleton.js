import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

export default function Variants() {
  return (
    <Stack spacing={1} className='border p-2 mx-auto h-[300px] relative '>
      {/* For variant="text", adjust the height via font-size */}
      <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
      {/* For other variants, adjust the size with `width` and `height` */}
     
      <Skeleton variant="rectangular" width={300} height={30} />
      <div className='flex justify-center'>

      <Skeleton variant="rounded" width={300} height={150} />
      </div>

      <Skeleton variant="rectangular" className='absolute bottom-0  ' width={300} height={30} />
    </Stack>
  );
}
import * as React from 'react';
import LoadingButton from '@mui/lab/LoadingButton';
import SaveIcon from '@mui/icons-material/Save';
import Stack from '@mui/material/Stack';

export default function LoadingButtons(props) {
  return (
    <Stack className='' direction="row" spacing={2}>
     
      <LoadingButton  className='w-[100px] text-[15px] 'loading loadingIndicator= {props.title} variant="outlined">
      
      </LoadingButton>
      
    </Stack>
  );
}
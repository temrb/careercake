import React from 'react'
import CircularProgress from '@mui/material/CircularProgress'

const Loading = () => {
  return (
    <div className="grid h-screen content-center">
      <div className="flex justify-center">
        <CircularProgress />
      </div>
    </div>
  )
}

export default Loading
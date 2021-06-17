import React from 'react'

const WorkIcon = () => {
  const styles = {
    position: 'absolute',
    zIndex: -1,
    opacity: 0.6,
  }
  return (
    <div>
      <div>
        <i className="fas fa-code-branch fa-2x" style={{ ...styles, left: '10%' }}></i>
      </div>
    </div>
  )
}

export default WorkIcon

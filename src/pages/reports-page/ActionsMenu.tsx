// ** React Imports
import { MouseEvent, useState } from 'react'

// ** MUI Imports
import Menu from '@mui/material/Menu'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'
import Icon from 'src/@core/components/icon'
import { IconButton } from '@mui/material'

interface Props {
  report: {name: string}
}

const ActionsMenu = (props: Props) => {
  // ** State
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const downloadAsPDF = (report: any) => {
    setAnchorEl(null)
    fetch('/files/NAT_PDF_export_sample.pdf', {
      method: 'GET'
  })
    .then(res => res.blob())
    .then(blob => {
      const url = window.URL.createObjectURL(new Blob([blob]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', report.full_name + '.pdf');
      document.body.appendChild(link);
      link.click();
      link.parentNode && link.parentNode.removeChild(link);
    });
  }

  return (
    <div>
      <IconButton onClick={handleClick}>
        <Icon icon='mdi:dots-vertical' fontSize={20} />
      </IconButton>
      <Menu keepMounted id='simple-menu' anchorEl={anchorEl} onClose={handleClose} open={Boolean(anchorEl)}>
        <MenuItem onClick={handleClose}>
          <Icon icon='mdi:archive' fontSize={20} />
          Archive
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Icon icon='mdi:delete' fontSize={20} />
          Delete
        </MenuItem>
        <MenuItem onClick={() => downloadAsPDF(props.report)}>
          <Icon icon='mdi:file-pdf-box' fontSize={20} />
          Export as PDF
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Icon icon='mdi:table' fontSize={20} />
          Export as CSV
          </MenuItem>
      </Menu>
    </div>
  )
}

export default ActionsMenu

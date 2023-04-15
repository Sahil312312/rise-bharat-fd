import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';


import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import CloseIcon from "@mui/icons-material/Close";


const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};


const ITEM_HEIGHT = 48;

export default function LongMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [openModal, setOpenModal] = React.useState(false);
  const open = Boolean(anchorEl);
  

  const handleClickOpenModal = () => { 
    setOpenModal(true);
  };
  const handleCloseModal = () => {
    setOpenModal(false);
    setAnchorEl(null);
    
  };


  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  

  return (
    <div>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon sx={{color:"white"}}/>
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '20ch',
          },
        }}
      >
        
        <MenuItem >
        <div onClick={handleClickOpenModal}>Edit Group Name</div>
            
            <BootstrapDialog
              onClose={handleCloseModal}
              aria-labelledby="customized-dialog-title"
              open={openModal}
            >
              <BootstrapDialogTitle
                id="customized-dialog-title"
                onClose={handleCloseModal}
              >
                Edit Group Name
              </BootstrapDialogTitle>
              <DialogContent>
                <div style={{marginLeft:"20px"}}>
                  <input type="text" placeholder="Enter Group Name" />
                  <button className="btn-1" onClick={handleCloseModal}>
                    Save
                  </button>
                </div>
              </DialogContent>
              <DialogActions></DialogActions>
            </BootstrapDialog>

        </MenuItem>

        <MenuItem >Share</MenuItem>
      </Menu>
    </div>
  );
}



export  function EditGroupNameModal() {
  

  return (
    <div>
      
    </div>
  );
}

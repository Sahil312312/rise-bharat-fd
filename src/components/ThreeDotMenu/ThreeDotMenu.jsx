import * as React from 'react';
import './ThreeDotMenu.css'
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import CloseIcon from "@mui/icons-material/Close";
import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookShareButton,
  FacebookShareCount,
  LinkedinIcon,
  LinkedinShareButton,
  TelegramIcon,
  TelegramShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "react-share";


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
  const shareUrl = window.location.href
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorE2, setAnchorE2] = React.useState(null);
  const [openModal, setOpenModal] = React.useState(false);
  const [openModal2, setOpenModal2] = React.useState(false);
  const open = Boolean(anchorEl);
  const open2 = Boolean(anchorE2);
  

  const handleClickOpenModal = () => { 
    setOpenModal(true);
  };
  const handleCloseModal = () => {
    setOpenModal(false);
    setAnchorEl(null);
  };

  const handleClickOpenModal2 = () => { 
    setOpenModal2(true);
  };
  const handleCloseModal2 = () => {
    setOpenModal2(false);
    setAnchorE2(null);
    
  };


  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setAnchorE2(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
    setAnchorE2(null);
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
        anchorEl={anchorEl && anchorE2}
        open={open && open2}
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
            </BootstrapDialog>

        </MenuItem>

        <MenuItem onClick={handleClickOpenModal2}>

         <div >Share</div>
         <BootstrapDialog
              onClose={handleCloseModal2}
              aria-labelledby="customized-dialog-title2"
              open={openModal2}
            >
              <BootstrapDialogTitle
                id="customized-dialog-title2"
                onClose={handleCloseModal2}
              >
                Share
              </BootstrapDialogTitle>
              <DialogContent>
                <div style={{marginLeft:"20px"}}>
                   <div className="share">
                      <FacebookShareButton
                        url={shareUrl}
                        quote={"Apply Here!"}
                        hashtag="#hiring #jobs #jobsearch #job #career #recruitment #hiringnow #jobhunt #jobseekers #careers #jobseeker #jobopening #jobseeking #jobfair #jobinterview #jobsearching #jobhunting #jobshiring #jobvacancy #jobposting #jobopportunity #jobhunters #jobsearchtips #jobsearchhelp #jobsearchingtips #jobsearchadvice #jobsearchstrategies #jobsearchcoach #jobsearchsupport #jobsearchmotivation #jobsearchingadvice #jobsearchinghelp #jobsearchingstrategies #jobsearchingcoach #jobsearchingsupport #jobsearchingmotivation #jobsearchingtipsandadvice #jobsearchingtipsforbeginners #jobsearchingtipsfornewgrads #jobsearchingtipsforstudents #jobsearchingtipsforintroverts #jobsearchingtipsfornewcomers #jobsearchingtipsforveterans #jobsearchingtipsforwomen #jobsearchingtipsforprofessionals #jobsearchingtipsforcollegegrads #jobsearchingtipsforrecentgrads #jobsearchingtipsfornewgraduates #jobsearchingtipsfornewcomers #jobsearchingtipsforveterans #jobsearchingtipsforwomen #jobsearchingtipsforprofessionals #jobsearchingtipsforcollegegrads #jobsearchingtipsforrecentgrads #jobsearchingtipsfornewgraduates"
                      >
                        <FacebookIcon size={32} round />
                      </FacebookShareButton>
                      <WhatsappShareButton
                        url={shareUrl}
                        title={"Join this link to"}
                        separator={" Apply Now: "}
                      >
                        <WhatsappIcon size={33} round />
                      </WhatsappShareButton>
                      <TelegramShareButton url={shareUrl} title={"Join this link to apply"}>
                        <TelegramIcon size={33} round />
                      </TelegramShareButton>
                      <EmailShareButton
                        url={shareUrl}
                        subject={"Apply to this job"}
                        body={"Join this link to apply for the job via RiseBharat"}
                        separator = " Apply Now: "
                      >
                        <EmailIcon size={33} round />
                      </EmailShareButton>
                    </div>
                </div>
              </DialogContent>
            </BootstrapDialog>
        </MenuItem>
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

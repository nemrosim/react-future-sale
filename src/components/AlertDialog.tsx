import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

interface AlertDialogProps {
    content: string;
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AlertDialog: React.FC<AlertDialogProps> = ({ content, isOpen, setIsOpen }) => {
    return (
        <div>
            <Dialog
                open={isOpen}
                onClose={() => {
                    setIsOpen(false);
                }}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{'What is this?'}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">{content}</DialogContentText>
                </DialogContent>
            </Dialog>
        </div>
    );
};

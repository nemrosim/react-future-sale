import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

const useStyles = makeStyles({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
    drawer: {
        borderRadius: '10px 10px 0 0',
    },
});

export const BottomDrawer: React.FC<{
    isDrawerOpen: boolean;
    setIsDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ isDrawerOpen, setIsDrawerOpen }) => {
    const classes = useStyles();

    return (
        <Drawer
            anchor="bottom"
            open={isDrawerOpen}
            onClose={() => {
                setIsDrawerOpen(false);
            }}
            PaperProps={{ className: classes.drawer }}
        >
            <div
                role="presentation"
                onClick={() => {
                    setIsDrawerOpen(false);
                }}
                onKeyDown={() => {
                    setIsDrawerOpen(false);
                }}
            >
                <List className={classes.drawer}>
                    <ListItem button>
                        <ListItemText primary="Category 1" />
                    </ListItem>
                    <ListItem button>
                        <ListItemText primary="Category 2" />
                    </ListItem>
                    <ListItem button>
                        <ListItemText primary="Category 3" />
                    </ListItem>
                    <ListItem button>
                        <ListItemText primary="Category 4" />
                    </ListItem>
                    <ListItem button>
                        <ListItemText primary="Category 5" />
                    </ListItem>
                </List>
            </div>
        </Drawer>
    );
};

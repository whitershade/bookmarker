import React, {
  useEffect,
  FC,
  ReactElement,
} from 'react';
import { map } from 'lodash';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import PageWrapper from '../../../../decorators/PageWrapper/index';

interface Articles {
  _id: string;
  title: string;
}

interface Props {
  loadItems: Function;
  openModal: Function;
  push: Function;
  data: Articles[];
}

const Articles: FC<Props> = ({ loadItems, data, openModal, push }): ReactElement => {
  useEffect(() => {
    loadItems();
  }, []);

  return (
    <List component="nav">
      { map(data, ({ _id, title }) => (
        <ListItem button key={_id} onClick={() => push(`/articles/${_id}`)}>
          <ListItemText primary={title} />
          <ListItemSecondaryAction>
            <IconButton
              aria-label="Delete"
              onClick={openModal(_id)}
            >
              <DeleteIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      ))}
    </List>
  );
};

export default PageWrapper(Articles);

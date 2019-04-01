import React, {
  useEffect,
  FC,
  ReactElement,
} from 'react';
import { map } from 'lodash';
import { Link } from 'react-router-dom';
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
  data: Articles[];
}

const Articles: FC<Props> = ({ loadItems, data, openModal }): ReactElement => {
  useEffect(() => {
    loadItems();
  }, []);

  return (
    <List component="nav">
      { map(data, ({ _id, title }) => (
        <ListItem button key={_id}>
          <Link to={`/articles/${_id}`}>
            <ListItemText primary={title} />
          </Link>
          <ListItemSecondaryAction>
            <IconButton
              // onClick={deleteItem(_id)}
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

// Articles.propTypes = {
//   loadItems: PropTypes.func.isRequired,
//   data: PropTypes.arrayOf(PropTypes.shape({
//     _id: PropTypes.string.isRequired,
//     title: PropTypes.string.isRequired,
//   })).isRequired,
// };

export default PageWrapper(Articles);

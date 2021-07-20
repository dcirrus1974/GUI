import React, { useEffect }from 'react';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import { getPersonalData, delChildPath } from '../../../actions/actions';
import { useSelector, useDispatch } from 'react-redux';

export default function FilePath(props) {
  const dispatch = useDispatch();
  const pathlist = useSelector(state => state.personalData.filePath);
  function handleClick(event) {    
    dispatch(delChildPath("root"));
    dispatch(getPersonalData());
  }
  useEffect(() => {
    
  }, []);

  return (
    <Breadcrumbs aria-label="breadcrumb" style={{marginLeft:'40px'}}>        
      <Link href="#" onClick={handleClick} key="root">
        {props.root}
      </Link>
      {pathlist}
    </Breadcrumbs>
  );
}
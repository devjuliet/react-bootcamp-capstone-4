import React from "react";
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

const FilterByCategory = ({ renderProductsByCategory, categories }) => {
  return (
    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
    <nav aria-label="nav categories">
      <List>
        {categories.map((category) => (
          <ListItem
            key={category.id}
            onClick={() => renderProductsByCategory(category.id)}
          >
            <ListItemButton
            >
              <ListItemText primary={category.data.name} />
            </ListItemButton>
          </ListItem>
        ))}
       </List>
      </nav>
    </Box>
  );
};

export default FilterByCategory;
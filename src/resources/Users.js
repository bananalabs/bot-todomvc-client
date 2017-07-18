// in src/posts.js
import React from 'react';
import { Create, Edit, SimpleForm, DisabledInput, NumberInput,
         TextInput, BooleanField, Datagrid, List, NumberField,
         BooleanInput, TextField, DeleteButton, EditButton } from 'admin-on-rest';

export const usersCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
    
      <TextInput source="id" />
    
      <TextInput source="name" />
    
    </SimpleForm>
  </Create>
);

export const usersEdit = (props) => (
  <Edit title={'Edit Todo'} {...props}>
    <SimpleForm>
      <DisabledInput label="Id" source="id" />
      
        <TextInput source="id" />
      
        <TextInput source="name" />
      
    </SimpleForm>
  </Edit>
);

export const usersList = (props) => (
  <List {...props}>
    <Datagrid>
    
      <TextField source="id" />
    
      <TextField source="name" />
    
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
);
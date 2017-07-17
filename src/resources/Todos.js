// in src/posts.js
import React from 'react';
import {
  Create,
  Edit,
  SimpleForm,
  DisabledInput,
  NumberInput,
  TextInput,
  BooleanField,
  Datagrid,
  List,
  NumberField,
  BooleanInput,
  TextField,
  DeleteButton,
  EditButton
} from 'admin-on-rest';
export const TodosCreate = (props) => ( < Create { ...props
} > < SimpleForm > < BooleanInput source = "completed" / > < /SimpleForm> < /Create>);
export const TodosEdit = (props) => ( < Edit title = {
    'Edit Todo'
  } { ...props
  } > < SimpleForm > < DisabledInput label = "Id"
  source = "id" / > < BooleanInput source = "completed" / > < /SimpleForm> < /Edit>);
export const TodosList = (props) => ( < List { ...props
} > < Datagrid > < BooleanField source = "completed" / > < EditButton / > < DeleteButton / > < /Datagrid> < /List>);
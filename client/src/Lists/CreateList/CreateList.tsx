import React, { FunctionComponent, useState, useCallback } from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import styled from 'styled-components/macro';
import _TextField from '@material-ui/core/TextField';
import {
  useCreateTodoListMutation,
  ListsQuery
} from '../../__generated__/graphql';
import Lists from './../Lists.gql';

export type CreateListProps = {};

const CreateList: FunctionComponent<CreateListProps> = () => {
  // todo: show loading UI
  // todo: handle error
  const [createList, { loading, error }] = useCreateTodoListMutation();
  const [showField, setShowField] = useState(false);

  const handleShowField = useCallback(() => setShowField(true), [setShowField]);
  const handleHideField = useCallback(() => setShowField(false), [
    setShowField
  ]);
  const handleSubmit = useCallback(
    e => {
      e.preventDefault();
      const name: string = new FormData(e.target).get('name') as string;
      createList({
        variables: { fields: { name } },
        update(cache, { data }) {
          if (!data) {
            return;
          }
          const { createTodoList } = data;
          const result = cache.readQuery<ListsQuery>({ query: Lists });
          if (!result || !createTodoList) {
            return;
          }

          const { allTodoLists, version } = result;
          const updatedData: ListsQuery = {
            version,
            allTodoLists: {
              ...allTodoLists,
              edges: [
                ...allTodoLists.edges,
                {
                  __typename: 'TodoListEdge',
                  cursor: `not-applicable-local-update`,
                  node: createTodoList
                }
              ]
            }
          };
          cache.writeQuery({
            query: Lists,
            data: updatedData
          });

          setShowField(false);
        }
      });
    },
    [createList, setShowField]
  );

  return (
    <Container>
      {!showField && (
        <Button startIcon={<AddIcon />} onClick={handleShowField}>
          Create new list
        </Button>
      )}
      {showField && (
        <>
          <Form autoComplete="off" onSubmit={handleSubmit}>
            <TextField
              id="name"
              name="name"
              label="Name"
              color="secondary"
              autoFocus
              required
            />
            <CreateButton type="submit" variant="contained" disabled={loading}>
              Create
            </CreateButton>
            <Button onClick={handleHideField} disabled={loading}>
              Cancel
            </Button>
          </Form>
        </>
      )}
    </Container>
  );
};

export default CreateList;

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin: 50px 0;
`;

const TextField = styled(_TextField)`
  flex: 1;
  margin: 0 30px 0 0;
`;

const CreateButton = styled(Button)`
  margin-right: 20px;
`;

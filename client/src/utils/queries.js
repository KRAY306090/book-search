import gql from 'gql-tag';

export const QUERY_ME = gql`
    {
        me {
            _id
            username
            email
            savedBooks {
                bookId
                authors
                image
                description
                title
                link
            }
        }
    }
`;
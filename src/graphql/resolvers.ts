// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
const resolvers = {
    Query:{
        test: () => ["test1", "test2", "test3"]
    },
    Mutation: {
        testm: () => ["test1", "test2", "test3"]
    }
};

export default resolvers;
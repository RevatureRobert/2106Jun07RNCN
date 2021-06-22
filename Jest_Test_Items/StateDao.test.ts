const { DocumentClient } = require('aws-sdk/clients/dynamodb');

const isTest = process.env.JEST_WORKER_ID;
const config = {
    convertEmptyValues: true,
    ...(isTest && {
        endpoint: 'localhost:8000',
        sslEnabled: false,
        region: 'local-env',
    }),
};

const ddb = new DocumentClient(config);
const TABLE_NAME = 'test';

/**
 * resource used:
 * https://jestjs.io/docs/dynamodb
 */
it('Should insert one item into table', async () => {
    await ddb
        .put({ TableName: TABLE_NAME, 
            Item: { 
                fips: 1, 
                county: 'test county', 
                population: 444, 
                state: 'test state', 
                statecode: 'test statecode' 
            }
        })
        .promise();

    const { Item } = await ddb.get({ TableName: TABLE_NAME, Key: { fips: 1 } }).promise();

    return expect(Item).toEqual({
        fips: 1,
        county: 'test county',
        population: 444,
        state: 'test state',
        statecode: 'test statecode'
    });

});

it('Should delete one item from table', async () => {
    await ddb
        .delete({ TableName: TABLE_NAME, Key: { fips: 1 } })
        .promise();

    const { Item } = await ddb.get({ TableName: TABLE_NAME, Key: { fips: 1 } }).promise();

    return expect(Item).withContext;

});
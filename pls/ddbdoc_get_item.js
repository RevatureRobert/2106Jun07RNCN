import { GetCommand } from "@aws-sdk/lib-dynamodb";
import { ddbDocClient } from "./libs/ddbDocClient.js";
const TABLE_NAME = "genshin-drops";

// Set the parameters.
const params = {
  TableName: TABLE_NAME,
  /*
  Convert the key JavaScript object you are retrieving to the
  required Amazon DynamoDB record. The format of values specifies
  the datatype. The following list demonstrates different
  datatype formatting requirements:
  String: "String",
  NumAttribute: 1,
  BoolAttribute: true,
  ListAttribute: [1, "two", false],
  MapAttribute: { foo: "bar" },
  NullAttribute: null
   */
  Key: {
    'name': "ominous mask", // For example, 'Season': 2.
    //sortKey: "VALUE", // For example,  'Episode': 1; (only required if table has sort key).
  },
};

const run = async () => {
  try {
    const data = await ddbDocClient.send(new GetCommand(params));
    console.log("Success :", data.Item);
    return data;
  } catch (err) {
    console.log("Error", err);
  }
};
run();

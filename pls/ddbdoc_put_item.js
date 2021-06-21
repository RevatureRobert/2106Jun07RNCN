import { PutCommand } from "@aws-sdk/lib-dynamodb";
import { ddbDocClient } from "./libs/ddbDocClient.js";
const TABLE_NAME = "genshin-drops"

// Set the parameters.
const params = {
  TableName: TABLE_NAME,
  /*
    Convert the key JavaScript object you are adding to the
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
  Item: {
    name: "Damaged Mask", // For example, 'Season': 2
    //sortKey: "VALUE_2", // For example,  'Episode': 2 (only required if table has sort key)
    monster: "hilichurls",
    rarity: "white", //For example 'Title': 'The Beginning'

  },
};

const run = async () => {
  try {
    const data = await ddbDocClient.send(new PutCommand(params));
    console.log("Success - item added or updated", data);
    console.log(params);
    return data;
  } catch (err) {
    console.log("Error", err);
  }
};
run();
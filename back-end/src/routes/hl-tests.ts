// External Dependencies

import express, { Request, Response } from "express";
import { ObjectId } from "mongodb";
import { collections } from "../services/database.service";
import hlTest from "../models/hl-test";

// Global Config

export const hlTestsRouter = express.Router();

hlTestsRouter.use(express.json());

// GET

hlTestsRouter.get("/hlTests", async (_req: Request, res: Response) => {
  try {
    const hlTests = (await collections.hlTests
      ?.find({})
      .toArray()) as unknown as hlTest[];

    res.status(200).send(hlTests);
  } catch (error: any) {
    res.status(500).send(error.message);
  }
});

// GET BY ID

hlTestsRouter.get("/hlTests/:id", async (req: Request, res: Response) => {
  const id = req?.params?.id;

  try {
    const query = { _id: new ObjectId(id) };
    const hltest = (await collections.hlTests?.findOne(
      query
    )) as unknown as hlTest;

    if (hlTest) {
      res.status(200).send(hltest);
    }
  } catch (error) {
    res
      .status(404)
      .send(`Unable to find matching document with id: ${req.params.id}`);
  }
});

// POST

hlTestsRouter.post("/hlTests", async (req: Request, res: Response) => {
  try {
    const newHlTest = req.body as hlTest;
    const result = await collections.hlTests?.insertOne(newHlTest);

    result
      ? res
          .status(201)
          .send(`Successfully created a new test with id ${result.insertedId}`)
      : res.status(500).send("Failed to create a new test.");
  } catch (error: any) {
    console.log(error);
    res.status(400).send(error.message);
  }
});

// PUT

// hlTestsRouter.put("/:id", async (req: Request, res: Response) => {
//     const id = req?.params?.id;

//     try {
//         const updatedHlTest: hlTest = req.body as hlTest;
//         const query = { _id: new ObjectId(id) };

//         const result = await collections.hlTests.updateOne(query, { $set: updatedHlTest });

//         result
//             ? res.status(200).send(`Successfully updated test with id ${id}`)
//             : res.status(304).send(`Test with id: ${id} not updated`);
//     } catch (error) {
//         console.error(error.message);
//         res.status(400).send(error.message);
//     }
// });

// DELETE

// hlTestsRouter.delete("/:id", async (req: Request, res: Response) => {
//     const id = req?.params?.id;

//     try {
//         const query = { _id: new ObjectId(id) };
//         const result = await collections.hlTests.deleteOne(query);

//         if (result && result.deletedCount) {
//             res.status(202).send(`Successfully removed test with id ${id}`);
//         } else if (!result) {
//             res.status(400).send(`Failed to remove test with id ${id}`);
//         } else if (!result.deletedCount) {
//             res.status(404).send(`Test with id ${id} does not exist`);
//         }
//     } catch (error) {
//         console.error(error.message);
//         res.status(400).send(error.message);
//     }
// });

// {"_id":{"$oid":"64de2e3dc926efbed93f6950"},"title":"Cromwell","description":"Idite Nahyi","imgUrl":"https://s3.eu-west-2.amazonaws.com/history-test-2.0/preview-imgs/Oliver-C-min.webp"}

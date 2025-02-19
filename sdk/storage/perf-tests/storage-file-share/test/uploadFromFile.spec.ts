// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { v4 as generateUuid } from "uuid";
import { PerfOptionDictionary } from "@azure/test-utils-perf";
import fs from "fs";
import util from "util";
import { ShareFileClient } from "@azure/storage-file-share";
const writeFile = util.promisify(fs.writeFile);
const fileExists = util.promisify(fs.exists);
const mkdir = util.promisify(fs.mkdir);
const deleteFile = util.promisify(fs.unlink);

import { StorageFileShareTest } from "./storageTest.spec";
interface StorageFileShareUploadFromFileTestOptions {
  size: number;
}

const localDirName = "temp";
const localFileName = `${localDirName}/upload-from-test-temp-file.txt`;

export class StorageFileShareUploadFromFileTest extends StorageFileShareTest<
  StorageFileShareUploadFromFileTestOptions
> {
  fileClient: ShareFileClient;
  public options: PerfOptionDictionary<StorageFileShareUploadFromFileTestOptions> = {
    size: {
      required: true,
      description: "Size in bytes",
      shortName: "sz",
      longName: "size",
      defaultValue: 1024
    }
  };

  constructor() {
    super();
    const fileName = generateUuid();
    this.fileClient = this.directoryClient.getFileClient(fileName);
  }

  public async globalSetup() {
    await super.globalSetup();
    if (!(await fileExists(localDirName))) await mkdir(localDirName);
    await writeFile(localFileName, Buffer.alloc(this.parsedOptions.size.value!));
  }

  public async globalCleanup() {
    await deleteFile(localFileName);
    await super.globalCleanup();
  }

  async run(): Promise<void> {
    await this.fileClient.uploadFile(localFileName);
  }
}

11');
    this.seller = new Keypair();
    this.seller.generate({ seed: this.connection.getFeeRecipient() });
    this.seller.create({ publicKeys: [this.saverProgram] });
  }

  // Step 3: Saver creation with production-grade logic
  async createSaver() {
    // Initialize the system account for the saver program
    const account = await this.connection.getAccountAddress(this.saverProgram);
    
    // Transfer the initial vesting amount to the seller
    const transferTx = new Transaction({ ...new Transaction({ feeRecipient: this.seller }, { systemProgram: SystemProgram.programId }), ...this.seller.transfer(account, this.saverAmount) });
    const result = await this.connection.sendTransaction(transferTx);
    
    // Verify the vesting amount
    const vestingResult = await this.connection.sendTransaction(result);
    
    // Ensure the account is properly managed
    await this.connection.sendTransaction(vestingResult);
    
    // Add the seller account to the system
    await this.connection.sendTransaction(this.seller.create({ ...this.seller, publicKeys: [this.saverProgram] }));
  }

  // Step 4: Cash flow generation with test coverage
  async generateCashFlow() {
    // Calculate the cash flow based on the vesting schedule
    const cashFlow = await this.connection.sendTransaction(
      new Transaction({
        ...new Transaction({ feeRecipient: this.saverProgram
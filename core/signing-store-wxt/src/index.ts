// Copyright (c) 2025-2026 Digital Asset (Switzerland) GmbH and/or its affiliates. All rights reserved.
// SPDX-License-Identifier: Apache-2.0

/* eslint-disable @typescript-eslint/no-unused-vars */
import {
    SigningDriverConfig,
    SigningDriverStatus,
    SigningDriverStore,
    SigningKey,
    SigningTransaction,
} from '@canton-network/core-signing-lib'

export class WxtStore implements SigningDriverStore {
    getSigningKey(
        userId: string,
        keyId: string
    ): Promise<SigningKey | undefined> {
        throw new Error('Method not implemented.')
    }
    getSigningKeyByPublicKey(
        publicKey: string
    ): Promise<SigningKey | undefined> {
        throw new Error('Method not implemented.')
    }
    getSigningKeyByName(
        userId: string,
        name: string
    ): Promise<SigningKey | undefined> {
        throw new Error('Method not implemented.')
    }
    listSigningTransactionsByTxIdsAndPublicKeys(
        txIds: string[],
        publicKeys: string[]
    ): Promise<SigningTransaction[]> {
        throw new Error('Method not implemented.')
    }
    setSigningKey(userId: string, key: SigningKey): Promise<void> {
        throw new Error('Method not implemented.')
    }
    deleteSigningKey(userId: string, keyId: string): Promise<void> {
        throw new Error('Method not implemented.')
    }
    listSigningKeys(userId: string): Promise<SigningKey[]> {
        throw new Error('Method not implemented.')
    }
    getSigningTransaction(
        userId: string,
        txId: string
    ): Promise<SigningTransaction | undefined> {
        throw new Error('Method not implemented.')
    }
    setSigningTransaction(
        userId: string,
        transaction: SigningTransaction
    ): Promise<void> {
        throw new Error('Method not implemented.')
    }
    updateSigningTransactionStatus(
        userId: string,
        txId: string,
        status: SigningDriverStatus
    ): Promise<void> {
        throw new Error('Method not implemented.')
    }
    listSigningTransactions(
        userId: string,
        limit?: number,
        before?: string
    ): Promise<SigningTransaction[]> {
        throw new Error('Method not implemented.')
    }
    getSigningDriverConfiguration(
        userId: string,
        driverId: string
    ): Promise<SigningDriverConfig | undefined> {
        throw new Error('Method not implemented.')
    }
    setSigningDriverConfiguration(
        userId: string,
        config: SigningDriverConfig
    ): Promise<void> {
        throw new Error('Method not implemented.')
    }
    setSigningKeys(userId: string, keys: SigningKey[]): Promise<void> {
        throw new Error('Method not implemented.')
    }
    setSigningTransactions(
        userId: string,
        transactions: SigningTransaction[]
    ): Promise<void> {
        throw new Error('Method not implemented.')
    }
}

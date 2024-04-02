export const AuctionAbi = [
	{
		inputs: [],
		stateMutability: 'nonpayable',
		type: 'constructor',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'uint256',
				name: 'auctionId',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'bool',
				name: 'newState',
				type: 'bool',
			},
		],
		name: 'AuctionCancelledEvent',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'uint256',
				name: 'auctionId',
				type: 'uint256',
			},
			{
				indexed: true,
				internalType: 'address',
				name: 'collector',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'amount',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'feeAmount',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'returnedAmount',
				type: 'uint256',
			},
		],
		name: 'AuctionCollectedEvent',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'uint256',
				name: 'auctionId',
				type: 'uint256',
			},
			{
				indexed: true,
				internalType: 'address',
				name: 'creator',
				type: 'address',
			},
		],
		name: 'AuctionCreatedEvent',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'uint256',
				name: 'auctionId',
				type: 'uint256',
			},
			{
				indexed: true,
				internalType: 'address',
				name: 'bidder',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'amount',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'totalDeposited',
				type: 'uint256',
			},
		],
		name: 'BidCancelledEvent',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'uint256',
				name: 'auctionId',
				type: 'uint256',
			},
			{
				indexed: true,
				internalType: 'address',
				name: 'collector',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'amount',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'totalCollected',
				type: 'uint256',
			},
		],
		name: 'BidCollectedEvent',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'uint256',
				name: 'auctionId',
				type: 'uint256',
			},
			{
				indexed: true,
				internalType: 'address',
				name: 'bidder',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'amount',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'totalDeposited',
				type: 'uint256',
			},
		],
		name: 'BidEvent',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'uint8',
				name: 'version',
				type: 'uint8',
			},
		],
		name: 'Initialized',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'uint256',
				name: 'auctionId',
				type: 'uint256',
			},
			{
				indexed: true,
				internalType: 'address',
				name: 'bidder',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'amount',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'penaltyAmount',
				type: 'uint256',
			},
		],
		name: 'OverpaymentCollectedEvent',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'previousOwner',
				type: 'address',
			},
			{
				indexed: true,
				internalType: 'address',
				name: 'newOwner',
				type: 'address',
			},
		],
		name: 'OwnershipTransferred',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'signatory',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'bool',
				name: 'state',
				type: 'bool',
			},
		],
		name: 'SignatoryStatusChangeEvent',
		type: 'event',
	},
	{
		inputs: [],
		name: 'FEE_DENOMINATOR',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'auctionCount',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		name: 'auctionData',
		outputs: [
			{
				internalType: 'uint256',
				name: 'depositedAmount',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'ownerCollected',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'userCollected',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'userOverpaymentCollected',
				type: 'uint256',
			},
			{
				internalType: 'bool',
				name: 'isCancelled',
				type: 'bool',
			},
			{
				internalType: 'bool',
				name: 'isClosed',
				type: 'bool',
			},
			{
				internalType: 'uint256',
				name: 'ownerReturned',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'fee',
				type: 'uint256',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		name: 'auctionIds',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: '_id',
				type: 'uint256',
			},
		],
		name: 'auctionOwnerCollectable',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: '_id',
				type: 'uint256',
			},
		],
		name: 'auctionOwnerFee',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: '_id',
				type: 'uint256',
			},
		],
		name: 'auctionOwnerReturnable',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: '_id',
				type: 'uint256',
			},
		],
		name: 'auctionPayoutFactor',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: '_id',
				type: 'uint256',
			},
			{
				internalType: 'address',
				name: '_account',
				type: 'address',
			},
		],
		name: 'auctionUserFactor',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		name: 'auctions',
		outputs: [
			{
				internalType: 'uint256',
				name: 'id',
				type: 'uint256',
			},
			{
				internalType: 'address',
				name: 'seller',
				type: 'address',
			},
			{
				internalType: 'contract IERC20Upgradeable',
				name: 'token',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: 'saleAmount',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'fullBidAmount',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'startTimestamp',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'durationSeconds',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'bidStakeSeconds',
				type: 'uint256',
			},
			{
				internalType: 'bool',
				name: 'allowUserCancel',
				type: 'bool',
			},
			{
				internalType: 'bool',
				name: 'allowEarlyStake',
				type: 'bool',
			},
			{
				internalType: 'string',
				name: 'name',
				type: 'string',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: '_id',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: '_amount',
				type: 'uint256',
			},
		],
		name: 'bid',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [],
		name: 'bidToken',
		outputs: [
			{
				internalType: 'contract IERC20Upgradeable',
				name: '',
				type: 'address',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		name: 'bidTokenVesting',
		outputs: [
			{
				internalType: 'uint256',
				name: 'duration',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'toFactor',
				type: 'uint256',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: '_id',
				type: 'uint256',
			},
		],
		name: 'bidVestingSchedule',
		outputs: [
			{
				components: [
					{
						internalType: 'uint256',
						name: 'duration',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'toFactor',
						type: 'uint256',
					},
				],
				internalType: 'struct VestingPhase[]',
				name: '',
				type: 'tuple[]',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: '_id',
				type: 'uint256',
			},
			{
				internalType: 'bytes',
				name: '_signature',
				type: 'bytes',
			},
			{
				internalType: 'uint256',
				name: '_expireAt',
				type: 'uint256',
			},
		],
		name: 'cancelAuction',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: '_id',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: '_amount',
				type: 'uint256',
			},
		],
		name: 'cancelBid',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: '_id',
				type: 'uint256',
			},
		],
		name: 'collect',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: '_id',
				type: 'uint256',
			},
		],
		name: 'collectClosedAuction',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: '_destination',
				type: 'address',
			},
		],
		name: 'collectEarlyCollectPenalty',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: '_id',
				type: 'uint256',
			},
			{
				internalType: 'bool',
				name: '_acceptEarlyCollectPenalty',
				type: 'bool',
			},
		],
		name: 'collectOverpayment',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: '_id',
				type: 'uint256',
			},
		],
		name: 'collectRemainingAuctionToken',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				components: [
					{
						internalType: 'uint256',
						name: 'id',
						type: 'uint256',
					},
					{
						internalType: 'address',
						name: 'seller',
						type: 'address',
					},
					{
						internalType: 'contract IERC20Upgradeable',
						name: 'token',
						type: 'address',
					},
					{
						internalType: 'uint256',
						name: 'saleAmount',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'fullBidAmount',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'startTimestamp',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'durationSeconds',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'bidStakeSeconds',
						type: 'uint256',
					},
					{
						internalType: 'bool',
						name: 'allowUserCancel',
						type: 'bool',
					},
					{
						internalType: 'bool',
						name: 'allowEarlyStake',
						type: 'bool',
					},
					{
						internalType: 'string',
						name: 'name',
						type: 'string',
					},
					{
						components: [
							{
								internalType: 'uint256',
								name: 'duration',
								type: 'uint256',
							},
							{
								internalType: 'uint256',
								name: 'toFactor',
								type: 'uint256',
							},
						],
						internalType: 'struct VestingPhase[]',
						name: 'vesting',
						type: 'tuple[]',
					},
				],
				internalType: 'struct Auction',
				name: '_auction',
				type: 'tuple',
			},
			{
				internalType: 'bytes',
				name: '_signature',
				type: 'bytes',
			},
			{
				internalType: 'uint256',
				name: '_expireAt',
				type: 'uint256',
			},
		],
		name: 'create',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [],
		name: 'defaultBidVestingSchedule',
		outputs: [
			{
				components: [
					{
						internalType: 'uint256',
						name: 'duration',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'toFactor',
						type: 'uint256',
					},
				],
				internalType: 'struct VestingPhase[]',
				name: '',
				type: 'tuple[]',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'earlyCollectPenaltyCollected',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: '_id',
				type: 'uint256',
			},
		],
		name: 'earlyCollectPenaltyFactor',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		name: 'earlyCollectPenaltyVesting',
		outputs: [
			{
				internalType: 'uint256',
				name: 'duration',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'toFactor',
				type: 'uint256',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'fee',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'feeRecipient',
		outputs: [
			{
				internalType: 'address',
				name: '',
				type: 'address',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: '_id',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: '_expireAt',
				type: 'uint256',
			},
		],
		name: 'hashCancelAuctionSignature',
		outputs: [
			{
				internalType: 'bytes32',
				name: '',
				type: 'bytes32',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				components: [
					{
						internalType: 'uint256',
						name: 'id',
						type: 'uint256',
					},
					{
						internalType: 'address',
						name: 'seller',
						type: 'address',
					},
					{
						internalType: 'contract IERC20Upgradeable',
						name: 'token',
						type: 'address',
					},
					{
						internalType: 'uint256',
						name: 'saleAmount',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'fullBidAmount',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'startTimestamp',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'durationSeconds',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'bidStakeSeconds',
						type: 'uint256',
					},
					{
						internalType: 'bool',
						name: 'allowUserCancel',
						type: 'bool',
					},
					{
						internalType: 'bool',
						name: 'allowEarlyStake',
						type: 'bool',
					},
					{
						internalType: 'string',
						name: 'name',
						type: 'string',
					},
					{
						components: [
							{
								internalType: 'uint256',
								name: 'duration',
								type: 'uint256',
							},
							{
								internalType: 'uint256',
								name: 'toFactor',
								type: 'uint256',
							},
						],
						internalType: 'struct VestingPhase[]',
						name: 'vesting',
						type: 'tuple[]',
					},
				],
				internalType: 'struct Auction',
				name: '_auction',
				type: 'tuple',
			},
			{
				internalType: 'uint256',
				name: '_expireAt',
				type: 'uint256',
			},
		],
		name: 'hashCreateSignature',
		outputs: [
			{
				internalType: 'bytes32',
				name: '',
				type: 'bytes32',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				components: [
					{
						internalType: 'uint256',
						name: 'duration',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'toFactor',
						type: 'uint256',
					},
				],
				internalType: 'struct VestingPhase[]',
				name: '_vesting',
				type: 'tuple[]',
			},
		],
		name: 'hashVestingSignature',
		outputs: [
			{
				internalType: 'bytes32',
				name: '',
				type: 'bytes32',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'contract IERC20Upgradeable',
				name: '_bidToken',
				type: 'address',
			},
			{
				components: [
					{
						internalType: 'uint256',
						name: 'duration',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'toFactor',
						type: 'uint256',
					},
				],
				internalType: 'struct VestingPhase[]',
				name: '_bidVesting',
				type: 'tuple[]',
			},
		],
		name: 'initialize',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: '_id',
				type: 'uint256',
			},
		],
		name: 'isAuctionCancelled',
		outputs: [
			{
				internalType: 'bool',
				name: '',
				type: 'bool',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: '_id',
				type: 'uint256',
			},
		],
		name: 'isAuctionClosed',
		outputs: [
			{
				internalType: 'bool',
				name: '',
				type: 'bool',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: '_id',
				type: 'uint256',
			},
		],
		name: 'isAuctionCreatorPaid',
		outputs: [
			{
				internalType: 'bool',
				name: '',
				type: 'bool',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: '_id',
				type: 'uint256',
			},
		],
		name: 'isAuctionOpen',
		outputs: [
			{
				internalType: 'bool',
				name: '',
				type: 'bool',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: '_id',
				type: 'uint256',
			},
		],
		name: 'isAuctionPending',
		outputs: [
			{
				internalType: 'bool',
				name: '',
				type: 'bool',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: '_id',
				type: 'uint256',
			},
		],
		name: 'isEarlyCollectPossible',
		outputs: [
			{
				internalType: 'bool',
				name: '',
				type: 'bool',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: '',
				type: 'address',
			},
		],
		name: 'isSignatory',
		outputs: [
			{
				internalType: 'bool',
				name: '',
				type: 'bool',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'nextAuctionId',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'owner',
		outputs: [
			{
				internalType: 'address',
				name: '',
				type: 'address',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'renounceOwnership',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: '_auctionId',
				type: 'uint256',
			},
			{
				components: [
					{
						internalType: 'uint256',
						name: 'duration',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'toFactor',
						type: 'uint256',
					},
				],
				internalType: 'struct VestingPhase[]',
				name: '_vesting',
				type: 'tuple[]',
			},
		],
		name: 'setAuctionBidVesting',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: '_auctionId',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: '_fee',
				type: 'uint256',
			},
		],
		name: 'setAuctionFee',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				components: [
					{
						internalType: 'uint256',
						name: 'duration',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'toFactor',
						type: 'uint256',
					},
				],
				internalType: 'struct VestingPhase[]',
				name: '_vesting',
				type: 'tuple[]',
			},
		],
		name: 'setBidVesting',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				components: [
					{
						internalType: 'uint256',
						name: 'duration',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'toFactor',
						type: 'uint256',
					},
				],
				internalType: 'struct VestingPhase[]',
				name: '_vesting',
				type: 'tuple[]',
			},
		],
		name: 'setEarlyCollectAfterPenaltyFactorVesting',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: '_fee',
				type: 'uint256',
			},
		],
		name: 'setFee',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address[]',
				name: '_signatories',
				type: 'address[]',
			},
			{
				internalType: 'bool[]',
				name: '_states',
				type: 'bool[]',
			},
		],
		name: 'setSignatories',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'newOwner',
				type: 'address',
			},
		],
		name: 'transferOwnership',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: '_id',
				type: 'uint256',
			},
			{
				internalType: 'address',
				name: '_account',
				type: 'address',
			},
		],
		name: 'userCollectable',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: '_id',
				type: 'uint256',
			},
			{
				internalType: 'address',
				name: '_account',
				type: 'address',
			},
		],
		name: 'userCollectableMaximum',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
			{
				internalType: 'address',
				name: '',
				type: 'address',
			},
		],
		name: 'userCollected',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: '_id',
				type: 'uint256',
			},
			{
				internalType: 'address',
				name: '_account',
				type: 'address',
			},
		],
		name: 'userDeposited',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: '_id',
				type: 'uint256',
			},
			{
				internalType: 'address',
				name: '_account',
				type: 'address',
			},
		],
		name: 'userEarlyCollectPenalty',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: '_id',
				type: 'uint256',
			},
			{
				internalType: 'address',
				name: '_account',
				type: 'address',
			},
		],
		name: 'userOverpaymentCollectable',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: '_id',
				type: 'uint256',
			},
			{
				internalType: 'address',
				name: '_account',
				type: 'address',
			},
		],
		name: 'userOverpaymentCollectableMaximum',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
			{
				internalType: 'address',
				name: '',
				type: 'address',
			},
		],
		name: 'userOverpaymentCollected',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: '_id',
				type: 'uint256',
			},
			{
				internalType: 'address',
				name: '_account',
				type: 'address',
			},
		],
		name: 'userPaidRoundUp',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: '_id',
				type: 'uint256',
			},
			{
				internalType: 'address',
				name: '_account',
				type: 'address',
			},
		],
		name: 'userPaidToBuyToken',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
			{
				internalType: 'address',
				name: '',
				type: 'address',
			},
		],
		name: 'userTotalDeposit',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'bytes32',
				name: '_messageHash',
				type: 'bytes32',
			},
			{
				internalType: 'bytes',
				name: '_signature',
				type: 'bytes',
			},
		],
		name: 'validateSignature',
		outputs: [],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				components: [
					{
						internalType: 'uint256',
						name: 'duration',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'toFactor',
						type: 'uint256',
					},
				],
				internalType: 'struct VestingPhase[]',
				name: '_vesting',
				type: 'tuple[]',
			},
		],
		name: 'validateVesting',
		outputs: [],
		stateMutability: 'pure',
		type: 'function',
	},
	{
		inputs: [
			{
				components: [
					{
						internalType: 'uint256',
						name: 'duration',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'toFactor',
						type: 'uint256',
					},
				],
				internalType: 'struct VestingPhase[]',
				name: '_phases',
				type: 'tuple[]',
			},
			{
				internalType: 'uint256',
				name: '_startTimestamp',
				type: 'uint256',
			},
		],
		name: 'vestedFactor',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: '_id',
				type: 'uint256',
			},
		],
		name: 'vestingSchedule',
		outputs: [
			{
				components: [
					{
						internalType: 'uint256',
						name: 'duration',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'toFactor',
						type: 'uint256',
					},
				],
				internalType: 'struct VestingPhase[]',
				name: '',
				type: 'tuple[]',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
] as const

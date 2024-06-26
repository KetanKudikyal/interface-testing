import { SUPPORTED_V2POOL_CHAIN_IDS, SUPPORTED_V2POOL_CHAIN_IDS_DEPRECATED } from 'constants/chains'
import { FeatureFlags } from 'uniswap/src/features/gating/flags'
import { useFeatureFlag } from 'uniswap/src/features/gating/hooks'
import { useChainId } from 'wagmi'

export function useNetworkSupportsV2() {
  const chainId = useChainId()
  const isV2EverywhereEnabled = useFeatureFlag(FeatureFlags.V2Everywhere)

  return (
    chainId &&
    ((isV2EverywhereEnabled && SUPPORTED_V2POOL_CHAIN_IDS.includes(chainId)) ||
      SUPPORTED_V2POOL_CHAIN_IDS_DEPRECATED.includes(chainId))
  )
}

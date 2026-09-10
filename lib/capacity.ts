export type CapacityInput={parametersB:number;bits:number;memoryGiB:number;requestsPerMinute:number;outputTokens:number;tokensPerSecondPerReplica:number;headroomPercent:number};
export const defaults:CapacityInput={parametersB:70,bits:16,memoryGiB:80,requestsPerMinute:120,outputTokens:300,tokensPerSecondPerReplica:250,headroomPercent:20};
export function estimateCapacity(v:CapacityInput){
 if(!v||typeof v!=='object'||Array.isArray(v)||Object.keys(v).length!==Object.keys(defaults).length||Object.keys(defaults).some(k=>!(k in v))||Object.keys(v).some(k=>!(k in defaults)))throw new Error('Invalid assumptions shape');
 for(const [k,x] of Object.entries(v))if(!Number.isFinite(x)||(k==='headroomPercent'?x<0:x<=0))throw new Error(`Invalid ${k}`);
 if(v.headroomPercent>=100||v.parametersB>10000||v.bits>64)throw new Error('Assumptions outside supported range');
 const weightsGiB=v.parametersB*1e9*(v.bits/8)/2**30;
 const usableMemoryGiB=v.memoryGiB*(1-v.headroomPercent/100);
 const outputTokensPerSecond=v.requestsPerMinute*v.outputTokens/60;
 return {weightsGiB,usableMemoryGiB,weightFitDeviceFloor:Math.ceil(weightsGiB/usableMemoryGiB),outputTokensPerSecond,throughputReplicaFloor:Math.ceil(outputTokensPerSecond/v.tokensPerSecondPerReplica),qualifier:'Illustrative lower bounds. Replica count is not GPU count. Requires workload benchmarking; excludes prefill, KV cache, activations, latency and failure redundancy.'};
}

//   Text Encoder shared by BOTH H3 variants (FL2VA and Ref2VA) [NVIDIA ONLY].
//   qwen3vl_32b_minimax_h3_nvfp4_awq.safetensors  15.7 GB  (H3-Encoder, Blackwell-native NVFP4)
module.exports = {
  run: [
    {
      method: "hf.download",
      params: {
        path: "../app/models",
        _: ["Comfy-Org/MiniMax-H3", "text_encoders/qwen3vl_32b_minimax_h3_nvfp4_awq.safetensors"],
        "local-dir": "."
      }
    }
  ]
}
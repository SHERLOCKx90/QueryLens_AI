// const API_BASE_URL = 'http://52.224.54.204:8002'
const API_BASE_URL = 'http://localhost:8000'

const API_ENDPOINTS = {
    GET_DATASET: `${API_BASE_URL}/get_dataset_lov`,
    GET_ANS_V0: `${API_BASE_URL}/get_answer`,
    // GET_ANS_V1: `${API_BASE_URL}/v1/get_answer`,
    // GET_ANS_V2: `${API_BASE_URL}/v2/get_answer`,
}

export default API_ENDPOINTS;
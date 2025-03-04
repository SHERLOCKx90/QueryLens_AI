const API_BASE_URL = 'http://52.224.54.204:8002'

const API_ENDPOINTS = {
    GET_DATASET: `${API_BASE_URL}/admin/get_datasets_lov`,
    GET_ANS_V0: `${API_BASE_URL}/v0/get_answer`,
    GET_ANS_V1: `${API_BASE_URL}/v1/get_answer`,
    GET_ANS_V2: `${API_BASE_URL}/v2/get_answer`,
}

export default API_ENDPOINTS;
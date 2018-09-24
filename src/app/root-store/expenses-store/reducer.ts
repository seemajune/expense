import { Actions, ActionTypes } from './actions';
import { initialState, State } from './state';

export function featureReducer(state = initialState, action: Actions): State {
    switch (action.type) {
        // GET LIST
        case ActionTypes.REQUEST_EXPENSES:
            return {
                ...state,
                error: null,
                isLoading: true
            };
        case ActionTypes.REQUEST_EXPENSES_SUCCESS:
            return {
                ...state,
                items: action.payload.items,
                error: null,
                isLoading: false,

            };
        case ActionTypes.REQUEST_EXPENSES_FAIL:
            return {
                ...state,
                error: action.payload.error,
                isLoading: false
            };

        // GET DETAIL
        case ActionTypes.REQUEST_EXPENSE:
            return {
                ...state,
                error: null,
                isLoading: true
            };
        case ActionTypes.REQUEST_EXPENSE_SUCCESS:
            return {
                ...state,
                items: action.payload.items,
                error: null,
                isLoading: false,

            };
        case ActionTypes.REQUEST_EXPENSE_FAIL:
            return {
                ...state,
                error: action.payload.error,
                isLoading: false
            };

        // UPDATE DETAIL
        case ActionTypes.UPDATE_EXPENSE:
            return {
                ...state,
                items: [action.payload.expense],
                error: null,
                isLoading: true
            };
        case ActionTypes.UPDATE_EXPENSE_SUCCESS:
            return {
                ...state,
                items: action.payload.items,
                error: null,
                isLoading: false,

            };
        case ActionTypes.UPDATE_EXPENSE_FAIL:
            return {
                ...state,
                error: action.payload.error,
                isLoading: false
            };

        // UPLOAD RECEIPTS
        case ActionTypes.UPLOAD_RECEIPTS:
            return {
                ...state,
                formData: action.payload.receipts,
                error: null,
                isLoading: true
            };

        case ActionTypes.UPLOAD_START:
            return {
                ...state,
                error: null,
                isLoading: true,
            };

        case ActionTypes.UPLOAD_FAIL:
            return {
                ...state,
                error: action.payload.error,
                isLoading: false
            };
        default: {
            return state;
        }
    }
}

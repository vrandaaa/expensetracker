import React from "react";

const DeleteConfirmation = ({
  isOpen,
  onClose,
  onConfirm,
  title = "Delete Transaction",
  message = "Are you sure you want to delete this transaction? This action cannot be undone."
}) => {

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl p-6 w-[90%] max-w-md shadow-xl">
        
        <h2 className="text-xl font-semibold text-slate-800 mb-2">
          {title}
        </h2>

        <p className="text-slate-500 text-sm mb-6">
          {message}
        </p>

        <div className="flex justify-end gap-3">
          
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl border border-slate-300 text-slate-700 hover:bg-slate-100 transition"
          >
            Cancel
          </button>

          <button
            onClick={onConfirm}
            className="px-4 py-2 rounded-xl bg-red-500 text-white hover:bg-red-600 transition"
          >
            Delete
          </button>

        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmation;
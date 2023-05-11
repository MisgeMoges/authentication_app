import React, { useState } from "react";
import CryptoJS from "crypto-js";

const Security = () => {
  const [inputMessage, setInputMessage] = useState("");
  const [messageToDecrypt, setMessageToDecrypt] = useState("");
  const [inputKey, setInputKey] = useState("");
  const [inputKeyToDecrypt, setInputKeyToDecrypt] = useState("");
  const [encryptedMessage, setEncryptedMessage] = useState("");
  const [decryptedMessage, setDecryptedMessage] = useState("");
  const [algorithm, setAlgorithm] = useState("");

  const handleEncrypt = () => {
    if (algorithm === "one-time-pad") {
     const message = inputMessage.toUpperCase();
     const key = inputKey.toUpperCase();
      if (key.length !== message.length) {
        alert("Encryption key must have the same length as the message");
        return;
      }
     let encrypted = "";
     for (let i = 0; i < message.length; i++) {
       const charCode = ((message.charCodeAt(i) + key.charCodeAt(i)) % 26) + 65;
       encrypted += String.fromCharCode(charCode);
     }
     setEncryptedMessage(encrypted);
    } else if (algorithm === "AES") {
      if (
        inputKey.length !== 16 &&
        inputKey.length !== 24 &&
        inputKey.length !== 32
      ) {
        alert("AES encryption key must be 128, 192, or 256 bits long");
        return;
      }


      const ciphertext = CryptoJS.AES.encrypt(
        inputMessage,
        inputKey
      ).toString();
      setEncryptedMessage(ciphertext);
    } else if (algorithm === "3DES") {
      if (inputKey.length !== 32 && inputKey.length !== 48) {
        alert("3DES encryption key must be 128 or 192 bits long");
        return;
      }


      const key = CryptoJS.enc.Hex.parse(inputKey);
      const iv = CryptoJS.lib.WordArray.random(8);
      const message = CryptoJS.enc.Utf8.parse(inputMessage);
      const encrypted = CryptoJS.TripleDES.encrypt(message, key, {
        iv: iv,
        mode: CryptoJS.mode.CBC,
      });
      const ciphertext = iv.toString() + encrypted.ciphertext.toString();
      setEncryptedMessage(ciphertext);
    }
  };

  const handleDecrypt = () => {
    if (algorithm === "one-time-pad") {
    const message = messageToDecrypt.toUpperCase();
    const key = inputKeyToDecrypt.toUpperCase();
     if (key.length !== message.length) {
        alert("Decryption key must have the same length as the message");
        return;
     }
    let decrypted = "";
    for (let i = 0; i < message.length; i++) {
      const charCode =
        ((message.charCodeAt(i) - key.charCodeAt(i) + 26) % 26) + 65;
      decrypted += String.fromCharCode(charCode);
    }
    setDecryptedMessage(decrypted);
  
    } else if (algorithm === "AES") {
      const bytes = CryptoJS.AES.decrypt(encryptedMessage, inputKey);
      const plaintext = bytes.toString(CryptoJS.enc.Utf8);
      setDecryptedMessage(plaintext);
    } else if (algorithm === "3DES") {
      const key = CryptoJS.enc.Hex.parse(inputKeyToDecrypt);
      const ciphertext = CryptoJS.enc.Hex.parse(messageToDecrypt);
      const iv = ciphertext.clone();
      iv.sigBytes = 8;
      iv.clamp();
      ciphertext.words.splice(0, 2);
      ciphertext.sigBytes -= 8;
      const decrypted = CryptoJS.TripleDES.decrypt(
        { ciphertext: ciphertext },
        key,
        { iv: iv, mode: CryptoJS.mode.CBC }
      );
      const plaintext = decrypted.toString(CryptoJS.enc.Utf8);
      setDecryptedMessage(plaintext);
    }
  };

  const handleCopy = (message) => {
    navigator.clipboard
      .writeText(message)
      .then(() => {
        console.log("Copied to clipboard");
      })
      .catch((error) => {
        console.error("Error copying to clipboard:", error);
      });
  };
  return (
    <section className="bg-secondary mx-auto my-5 w-75 w-md-100 justify-content-center p-3">
      {/* <form className="d-flex flex-md-row flex-sm-column"> */}
      <div className="mb-3 w-25 d-flex mx-auto">
        <select
          className="form-select"
          id="algorithm"
          value={algorithm}
          onChange={(e) => setAlgorithm(e.target.value)}
        >
          <option value="">--Choose Algorithm--</option>
          <option value="one-time-pad">One Time Pad</option>
          <option value="AES">AES</option>
          <option value="3DES">3DES</option>
        </select>
      </div>
      <div className=" row  justify-content-center ">
        <div className=" col-md-6 col-sm-12 w-md-100">
          <article className="mx-auto">
            <div className="form-floating">
              <h3> Message to Encrypt</h3>
              <textarea
                className="form-control w-75 m-3 h-50"
                placeholder="Leave a comment here"
                id="floatingTextarea"
                rows="5"
                cols="4"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
              ></textarea>
            </div>
            <input
              type="password"
              placeholder="Enter Encryption key"
              id="password"
              className="mx-3 w-75"
              value={inputKey}
              onChange={(e) => setInputKey(e.target.value)}
            />
            <div className="container">
              <button
                type="button"
                className="btn btn-success"
                onClick={() => handleEncrypt(inputMessage, inputKey)}
              >
                Encrypt
              </button>
              <button
                type="button"
                className="m-5 btn btn-danger"
                onClick={() => handleCopy(encryptedMessage)}
              >
                Copy Encryption
              </button>
            </div>
            <div className="form-floating">
              <h3>Encrypted Message</h3>
              <textarea
                className="form-control w-75 m-3 h-50"
                placeholder="Leave a comment here"
                id="floatingTextarea"
                rows="5"
                cols="4"
                value={encryptedMessage}
              ></textarea>
            </div>
          </article>
        </div>
        <div className="col-md-6 col-sm-12">
          <article className=" mx-auto">
            <div className="form-floating">
              <h3>Message to Decrypt</h3>
              <textarea
                className="form-control w-75 m-3 h-50"
                placeholder="Leave a comment here"
                id="floatingTextarea"
                rows="5"
                cols="4"
                value={messageToDecrypt}
                onChange={(e) => setMessageToDecrypt(e.target.value)}
              ></textarea>
            </div>
            <input
              type="password"
              placeholder="Enter Decryption key"
              id="password"
              value={inputKeyToDecrypt}
              onChange={(e) => setInputKeyToDecrypt(e.target.value)}
              className="mx-3 w-75"
            />
            <div className="container">
              <button
                type="button"
                className="btn btn-success"
                onClick={() =>
                  handleDecrypt(messageToDecrypt, inputKeyToDecrypt)
                }
              >
                Decrypt
              </button>
              <button
                type="button"
                className="m-5 btn btn-danger"
                onClick={() => handleCopy(decryptedMessage)}
              >
                Copy Decryption
              </button>
            </div>
            <div className="form-floating">
              <h3>Decrypted Message</h3>
              <textarea
                className="form-control w-75 m-3 h-50"
                placeholder="Leave a comment here"
                id="floatingTextarea"
                rows="5"
                cols="4"
                value={decryptedMessage}
              ></textarea>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Security;

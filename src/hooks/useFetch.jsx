import { useEffect, useState } from "react";

/**
 * Permet de Fetch un stringify object si une propriété json:{data} est passée.
 * Sinon Fetch classiquement en passant un body:{data}.
 * @param {string} url - Endpoint URL.
 * @param {FetchEventInit} options
 * @returns
 */
export function useFetch(url, options = {}) {
    const [isLoading, setLoading] = useState(true);
    const [datas, setDatas] = useState(null);
    const [errors, setErrors] = useState(null);

    useEffect(() => {
        async function fetchData() {
            let headers = {
                Accept: "application/json; charset=UTF-8",
                ...options.headers,
            };
            if (options.img) {
                headers["Content-Type"] = "multipart/form-data";
            }
            if (options.json && !options.img) {
                Array.isArray(options.json)
                    ? (options.body = JSON.stringify(
                          Object.fromEntries(options.json)
                      ))
                    : (options.body = JSON.stringify(options.json));
                headers["Content-Type"] = "application/json; charset=UTF-8";
            }
            try {
                const response = await fetch(url, { ...options, headers });

                // Checking server response
                if (!response.ok) {
                    // Retrieve others parts of the response like the message
                    const errorMessage = await response.json();
                    throw new Error(
                        `Erreur HTTP! Status: ${response.status} - ${errorMessage.message}`,
                        {
                            cause: {
                                status: response.status,
                                message: errorMessage.message,
                                ok: errorMessage.ok ?? response.ok,
                            },
                        }
                    );
                }
                setDatas(await response.json());
            } catch (error) {
                setErrors(error.cause);
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, [url]);

    return {
        datas,
        errors,
        isLoading,
    };
}

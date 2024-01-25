import React, { useEffect, useState } from 'react';

const ItemList = () => {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchItems = async () => {
        try {
            const response = await fetch('http://localhost:8000/items');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            setItems(data);
        } catch (error) {
            setError(error.message);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchItems();
    }, []);

    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>Items List</h1>
            {isLoading && <p style={styles.loading}>Loading...</p>}
            {error && <p style={styles.error}>Error: {error}</p>}
            <table style={styles.table}>
                <thead>
                    <tr style={styles.tableRow}>
                        <th style={styles.tableHeaderCell}>ID</th>
                        <th style={styles.tableHeaderCell}>Name</th>
                        <th style={styles.tableHeaderCell}>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map(item => (
                        <tr key={item.ID} style={styles.tableRow}>
                            <td style={styles.tableCell}>{item.ID}</td>
                            <td style={styles.tableCell}>{item.Name}</td>
                            <td style={styles.tableCell}>{item.Price}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

const styles = {
    container: {
        margin: '20px',
        fontFamily: 'Arial, sans-serif',
    },
    heading: {
        fontSize: '24px',
        marginBottom: '10px',
        color: '#333',
    },
    loading: {
        fontStyle: 'italic',
        color: '#888',
    },
    error: {
        color: 'red',
    },
    table: {
        width: '100%',
        borderCollapse: 'collapse',
        marginTop: '10px',
    },
    tableRow: {
        border: '1px solid #ddd',
        transition: 'background-color 0.3s ease',
    },
    tableHeaderCell: {
        background: '#f2f2f2',
        border: '1px solid #ddd',
        padding: '12px',
        textAlign: 'left',
        fontWeight: 'bold',
        color: '#555',
    },
    tableCell: {
        border: '1px solid #ddd',
        padding: '12px',
        textAlign: 'left',
        transition: 'background-color 0.3s ease',
    },
};

export default ItemList;

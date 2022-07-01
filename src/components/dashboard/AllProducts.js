import React from "react";
import {
  Typography,
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Chip,
} from "@mui/material";
import BaseCard from "../baseCard/BaseCard";
import { useEffect } from "react";


const AllProducts = ({products}) => {
  useEffect(() => {
     console.log(products)
  
   
  }, [])
  
  return (
    <BaseCard title="View Products">
      <Table
        aria-label="simple table"
        sx={{
          mt: 3,
          whiteSpace: "spaces",
        }}
      >
        <TableHead>
          <TableRow>
            <TableCell>
              <Typography color="textSecondary" variant="h6">
                Title
              </Typography>
            </TableCell>
            <TableCell>
              <Typography color="textSecondary" variant="h6">
                Slug
              </Typography>
            </TableCell>
            <TableCell>
              <Typography color="textSecondary" variant="h6">
                Image
              </Typography>
            </TableCell>
        
            <TableCell>
              <Typography color="textSecondary" variant="h6">
               Size/Color
              </Typography>
            </TableCell>
            <TableCell align="right">
              <Typography color="textSecondary" variant="h6">
               Price
              </Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((product) => (
            <TableRow key={product.slug}>
              <TableCell>
                <Typography
                  sx={{
                    fontSize: "15px",
                    fontWeight: "500",
                  }}
                >
                  {product.title}
                </Typography>
              </TableCell>
              <TableCell>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Box>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: "600",
                      }}
                    >
                      {product.slug}
                    </Typography>
                    <Typography
                      color="textSecondary"
                      sx={{
                        fontSize: "13px",
                      }}
                    >
                   
                      
                    </Typography>
                  </Box>
                 
                </Box>
              </TableCell>
              <TableCell>
              <img style={{height:'70px', margin: '0 12px'}} src={product.img} alt=''></img>

              </TableCell>
              
              <TableCell>
                <Typography color="textSecondary" variant="h6">
                  {product.size}/ {product.color}
                </Typography>
              </TableCell>
              <TableCell>
                {/* <Chip
                  sx={{
                    pl: "4px",
                    pr: "4px",
                    backgroundColor: product.pbg,
                    color: "#fff",
                  }}
                  size="small"
                  label={product.priority}
                ></Chip> */}
              </TableCell>
              <TableCell align="left">
                <Typography >₹{product.price}</Typography>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </BaseCard>
  );
};

export default AllProducts;

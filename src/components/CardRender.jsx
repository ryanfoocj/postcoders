import { Card, CardContent, Typography, Box } from "@mui/material";
import { borderRadius } from "@mui/system";

export default function CardRender(item) {
  const { longitude, latitude, state } = item;
  const place = item["place name"];
  const stateAbb = item["state abbreviation"];

  return (
    <Box
      sx={{
        width: { xs: 100, sm: 200, md: 300 },
        display: "inline-block",

        margin: 2,
      }}
    >
      <Card
        sx={{ minWidth: 240, "--Card-radius": "35px" }}
        style={{ backgroundColor: "#89C4E1" }}
        variant="outlined"
      >
        <CardContent>
          <Typography sx={{ fontSize: 18 }} color="text.primary" gutterBottom>
            {place}
          </Typography>

          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            State: {state}, {stateAbb}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Coordinates: ({longitude}, {latitude})
            <br />
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
